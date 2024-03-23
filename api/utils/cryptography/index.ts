import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import ErrorNotAuthenticatedUser from '../exceptions/ErrorsUserNotAuthenticated'
import ErrorGeneric from '../exceptions/ErrorGeneric'
import ErrorNotAuthorized from '../exceptions/ErrorUserNotAuthorized'
import profile from '../rules'

require('dotenv').config()
const jwtHashSecret = process.env.JWT_SECRET

class Cryptography {
  
  public createSalt (): string {
    try {
      return crypto.randomBytes(16).toString('hex')
    } catch (error) {
      throw new ErrorGeneric(`Erro ao criar o salt! ${error}`)
    }
  }

  public createHash (password: string, salt: string): string {
    try {
      return crypto
        .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
        .toString('hex')
    } catch (error) {
      throw new ErrorGeneric(`Erro ao criar o hash! ${error}`)
    }
  }

  public validatePassword (password: string, salt: string, hash: string): boolean {
    try {
      const result = crypto
        .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
        .toString('hex')
      return result === hash
    } catch (error) {
      throw new ErrorGeneric(`Erro ao validar a senha! ${error}`)
    }
  }

  public decodeToken = (token: string) : any=> {
    try {
      return jwt.decode(token)
    } catch (error) {
      throw new ErrorGeneric(`Erro ao decodificar o token! ${error}`)
    }
  }
  
  public tokenIsValid = (token: string) => {
    try {
      return jwt?.verify(token, jwtHashSecret)
    } catch (err) {
      throw new ErrorNotAuthenticatedUser('Usuário não autenticado!')
    }
  }

  public checkPermissionService = (permissions: string, rule: string) => {
    const result = profile.filter((item) => item.permission === String(permissions))
    const check = result[0]?.rule?.includes(rule)
  
    if (!check) {
      throw new ErrorNotAuthorized('Usuário não autorizado!')
    }
    return !!check
  }
}

export default new Cryptography()
