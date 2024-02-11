import { Request, Response } from 'express'
import { CreatePaymentIntentUseCase } from './CreatePaymentIntentUseCase'

export class CreatePaymentIntentController {
  constructor(private createPaymentIntentUseCase: CreatePaymentIntentUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const data = await this.createPaymentIntentUseCase.execute({
        productId: request.params.id,
        buyerId: request.body.buyerId,
       })

      return response
        .status(201)
        .send({ message: 'Payment intent successfully created!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
