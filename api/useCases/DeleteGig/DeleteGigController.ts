import { Request, Response } from 'express'
import { DeleteGigUseCase } from './DeleteGigUseCase'

export class DeleteGigController {
  constructor(private deleteGigUseCase: DeleteGigUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      await this.deleteGigUseCase.execute(id)

      return response
        .status(200)
        .send({ message: 'Gig deleted successfully!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
