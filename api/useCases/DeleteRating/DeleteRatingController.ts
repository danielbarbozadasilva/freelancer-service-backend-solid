import { Request, Response } from 'express'
import { DeleteRatingUseCase } from './DeleteRatingUseCase'

export class DeleteRatingController {
  constructor(private deleteRatingUseCase: DeleteRatingUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      await this.deleteRatingUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'Avaliação excluída com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
