import { Request, Response } from 'express'
import { SignInUseCase } from './SignInUseCase'

export class SignInController {
  constructor(private createUserUseCase: SignInUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.createUserUseCase.execute({
        username: request.body.username,
        password: request.body.password
      })

      return response
        .status(201)
        .send({ message: 'Successfully authenticated user!', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
