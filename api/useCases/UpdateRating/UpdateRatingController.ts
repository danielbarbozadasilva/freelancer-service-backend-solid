import { Request, Response } from 'express'
import { UpdateRatingUseCase } from './UpdateRatingUseCase'

export class UpdateRatingController {
  constructor(private updateRatingUseCase: UpdateRatingUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.updateRatingUseCase.execute({
        id: request.params.id,
        name: request.body.name,
        text: request.body.text,
        score: request.body.score,
        productId: request.body.productId,
        userId: request.body.userId
       })

      return response
        .status(200)
        .send({ message: 'Avaliação atualizada com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
