import { Request, Response } from 'express'
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'

export class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      await this.deleteCategoryUseCase.execute(id)

      return response
        .status(200)
        .send({ message: 'Category deleted successfully!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
