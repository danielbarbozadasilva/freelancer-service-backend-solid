import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'

export class UpdateProfileController {
  constructor(private updateProfileUseCase: UpdateProfileUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const salt = Cryptography.createSalt()
      const data = {
        name: request.body.name,
        username: request.body.username,
        email: request.body.email,
        cpf: request.body.cpf,
        birthDate: request.body.birthDate,
        picture: request?.file?.originalname,
        country: request.body.country,
        phone: request.body.phone,
        description: request.body.description,
        permissions: request.body.permissions,
        hash: request.body?.password? Cryptography.createHash(request.body.password, salt) : null,
        salt: salt,
        isSeller: true
      }
      if (!request.body?.password) {
        delete data.hash;
        delete data.salt;
        delete data.permissions;
      }
      
      await this.updateProfileUseCase.execute(
        request.params.id, 
       { ...data } 
      )

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
