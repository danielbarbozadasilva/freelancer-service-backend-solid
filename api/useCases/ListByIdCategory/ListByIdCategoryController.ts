import { Request, Response } from 'express'
import { ListByIdCategoryUseCase } from './ListByIdCategoryUseCase'

export class ListByIdCategoryController {
  constructor(private listByIdCategoryUseCase: ListByIdCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const data = await this.listByIdCategoryUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'List category successfully!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
