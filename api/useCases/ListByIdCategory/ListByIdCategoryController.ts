import { Request, Response } from 'express'
import { ListByIdCategoryUseCase } from './ListByIdCategoryUseCase'
import { categoryDTO } from './ListByIdCategoryDTO'

export class ListByIdCategoryController {
  constructor(private listByIdCategoryUseCase: ListByIdCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const result = await this.listByIdCategoryUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'Categoria listada com sucesso!', data: await categoryDTO(result) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
