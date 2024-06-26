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
        picture: request?.file?.filename,
        country: request.body.country,
        phone: request.body.phone,
        description: request.body.description,
        permissions: request.body.permissions,
        isSeller: request.body.isSeller,
        hash: request.body?.password ? Cryptography.createHash(request.body.password, salt) : null,
        salt: salt,
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
        .send({ message: 'Usuário atualizado com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
