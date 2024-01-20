import { ISignInRepository } from '../ISignInRepository'
import clientSchema from '../../database/schemas/schemas.user'
import jwt from 'jsonwebtoken'
import Cryptography from '../../utils/cryptography'
import { formatAddressImage } from '../../utils/utils.file'

export class SignInRepository implements ISignInRepository {
  async verifyCredentials(email: string, password: string): Promise<boolean> {
    const result = await clientSchema.findOne({ email })
    if (!!result) {
      return Cryptography.validatePassword(password, result.salt, result.hash)
    }
    return false
  }

  async authenticate(email: string): Promise<object> {
    const result = await clientSchema.findOne({ email })
    const data = {
      id: result._id,
      username: result.username,
      email: result.email,
      isSeller: result.isSeller,
      permissions: result.permissions,
      picture: formatAddressImage(result.picture[0])
    }
    const token = jwt.sign(
      {
        ...data
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_VALID_TIME
      }
    )
    return { token, data }
  }
}
