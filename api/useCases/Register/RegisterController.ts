import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { RegisterUseCase } from './RegisterUseCase'

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const salt = Cryptography.createSalt()
      const result = await this.registerUseCase.execute({
        name: request.body.name,
        username: request.body.username,
        email: request.body.email,
        cpf: request.body.cpf,
        birthDate: request.body.birthDate,
        picture: request?.file?.filename,
        country: request.body.country,
        phone: request.body.phone,
        description: request.body.description,
        isSeller: request.body.isSeller,
        permissions: request.body.isSeller ? ['freelancer'] : ['client'],
        hash: Cryptography.createHash(request.body.password, salt),
        salt: salt
      })

      return response
        .status(201)
        .send({ message: 'Usuário criado com sucesso!', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
