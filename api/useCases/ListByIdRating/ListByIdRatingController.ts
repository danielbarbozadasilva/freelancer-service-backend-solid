import { Request, Response } from 'express'
import { ListByIdRatingUseCase } from './ListByIdRatingUseCase'

export class ListByIdRatingController {
  constructor(private listByIdRatingUseCase: ListByIdRatingUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.productid
      const result = await this.listByIdRatingUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'Avaliação listada com sucesso!', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
