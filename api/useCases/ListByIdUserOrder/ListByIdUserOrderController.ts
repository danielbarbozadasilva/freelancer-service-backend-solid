import { Request, Response } from 'express'
import { ListByIdOrderUseCase } from './ListByIdUserOrderUseCase'
import { orderDTO } from './ListByIdUserOrderDTO'

export class ListByIdOrderController {
  constructor(private listByIdOrderUseCase: ListByIdOrderUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      
      const result = await this.listByIdOrderUseCase.execute({
        userId: request.params.id,
        isSeller: request.params.isSeller.toLowerCase() === 'true'
      })

      return response
      .status(200)
      .send({ message: 'Pedidos listados com sucesso!', data: orderDTO(result) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
