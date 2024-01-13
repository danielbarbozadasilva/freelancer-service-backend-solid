import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'

export class UpdateProfileController {
  constructor(private updateProfileUseCase: UpdateProfileUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const salt = Cryptography.createSalt()

      await this.updateProfileUseCase.execute(
        request.params.id, 
        {
        name: request.body.name,
        username: request.body.username,
        email: request.body.email,
        cpf: request.body.cpf,
        birthDate: request.body.birthDate,
        picture: request.file,
        country: request.body.country,
        phone: request.body.phone,
        desc: request.body.desc,
        permissions: ['client'],
        hash: Cryptography.createHash(request.body.password, salt),
        salt: salt,
        isSeller: true
      })

      return response
        .status(200)
        .send({ message: 'User successfully updated!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
