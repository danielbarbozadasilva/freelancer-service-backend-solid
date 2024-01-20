import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import ErrorNotAuthenticatedUser from '../exceptions/errors.user-not-authenticated'
import ErrorGeneric from '../exceptions/erros.generic-error'
require('dotenv').config()
const jwtHashSecret = process.env.JWT_SECRET

class Cryptography {
  
  public createSalt (): string {
    try {
      return crypto.randomBytes(16).toString('hex')
    } catch (error) {
      throw new ErrorGeneric(`Error creating salt! ${error}`)
    }
  }

  public createHash (password: string, salt: string): string {
    try {
      return crypto
        .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
        .toString('hex')
    } catch (error) {
      throw new ErrorGeneric(`Error creating hash! ${error}`)
    }
  }

  public validatePassword (password: string, salt: string, hash: string): boolean {
    try {
      const result = crypto
        .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
        .toString('hex')
      return result === hash
    } catch (error) {
      throw new ErrorGeneric(`Error validate password! ${error}`)
    }
  }

  public decodeToken = (token: string) : any=> {
    try {
      return jwt.decode(token)
    } catch (error) {
      throw new ErrorGeneric(`Error decoding token! ${error}`)
    }
  }
  
  public tokenIsValid = (token: string) => {
    try {
      return jwt?.verify(token, jwtHashSecret)
    } catch (err) {
      throw new ErrorNotAuthenticatedUser('Unauthenticated user!')
    }
  }
}

export default new Cryptography()
