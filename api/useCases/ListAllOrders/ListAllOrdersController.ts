import { Request, Response } from 'express'
import { ListAllOrdersUseCase } from './ListAllOrdersUseCase'
import { ordersDTO } from './ListAllOrdersDTO'

export class ListAllOrdersController {
  constructor(private listAllOrdersUseCase: ListAllOrdersUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.listAllOrdersUseCase.execute()
      return response
        .status(200)
        .send({ message: 'Pedidos listados com sucesso!', data: ordersDTO(result) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
