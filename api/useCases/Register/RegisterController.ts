import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { RegisterUseCase } from './RegisterUseCase'

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const salt = Cryptography.createSalt()

      await this.registerUseCase.execute({
        username: request.body.username,
        email: request.body.email,
        permissions: request.body.permissions,
        hash: Cryptography.createHash(request.body.password, salt),
        salt: salt,
        img: request.body.img,
        country: request.body.country,
        phone: request.body.phone,
        desc: request.body.desc,
        isSeller: false
      })

      return response
        .status(201)
        .send({ message: 'User successfully created!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
