import { Request, Response } from 'express'
import { DeleteRatingUseCase } from './DeleteRatingUseCase'

export class DeleteRatingController {
  constructor(private deleteRatingUseCase: DeleteRatingUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const result = await this.deleteRatingUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'Rating deleted successfully!', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
