import { Request, Response } from 'express'
import { ListAllProductUseCase } from './ListAllProductsUseCase'
import { productDTO } from './ListAllProductsDTO'

export class ListAllProductController {
  constructor(private listAllProductUseCase: ListAllProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const search = request.query;
      const result = await this.listAllProductUseCase.execute(search)
      return response
        .status(200)
        .send({ message: 'List all services successfully!', data: await productDTO(result as any) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
