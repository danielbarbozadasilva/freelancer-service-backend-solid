import { Request, Response } from 'express'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'

export class UpdateOrderController {
  constructor(private updateOrderUseCase: UpdateOrderUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.updateOrderUseCase.execute({
        payment_intent: request.params.id,
       })

      return response
        .status(200)
        .send({ message: 'Pedido atualizado com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
