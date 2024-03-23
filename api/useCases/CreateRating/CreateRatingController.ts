import { Request, Response } from 'express'
import { CreateRatingUseCase } from './CreateRatingUseCase'

export class CreateRatingController {
  constructor(private createRatingUseCase: CreateRatingUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.createRatingUseCase.execute({
        name: request.body.name,
        text: request.body.text,
        score: request.body.score,
        productId: request.body.productId,
        userId: request.body.userId
       })

      return response
        .status(201)
        .send({ message: 'Avaliação realizada com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
