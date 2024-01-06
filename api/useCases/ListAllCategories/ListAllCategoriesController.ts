import { Request, Response } from 'express'
import { ListAllCategoriesUseCase } from './ListAllCategoriesUseCase'
import { categoryDTO } from './ListAllCategoriesDTO'

export class ListAllCategoriesController {
  constructor(private listAllCategoriesUseCase: ListAllCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.listAllCategoriesUseCase.execute()
      
      return response
        .status(200)
        .send({ message: 'List all categories successfully!', data: categoryDTO(result) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
