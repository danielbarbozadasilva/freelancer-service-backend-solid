import { Request, Response } from 'express'
import { ListByIdProductUseCase } from './ListByIdProductUseCase'
import { productDTO } from './ListByIdProductDTO'

export class ListByIdProductController {
  constructor(private listByIdProductUseCase: ListByIdProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const result = await this.listByIdProductUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'Serviço listado com sucesso!', data: await productDTO(result as any) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
