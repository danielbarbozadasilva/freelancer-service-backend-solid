import { Request, Response } from 'express'
import { SignInUseCase } from './SignInUseCase'

export class SignInController {
  constructor(private createUserUseCase: SignInUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.createUserUseCase.execute({
        email: request.body.email,
        password: request.body.password
      })

      return response
        .status(200)
        .send({ message: 'Seja Bem-vindo', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
