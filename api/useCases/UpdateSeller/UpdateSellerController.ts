import { Request, Response } from 'express'
import { UpdateSellerUseCase } from './UpdateSellerUseCase'

export class UpdateSellerController {
  constructor(private updateSellerUseCase: UpdateSellerUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.updateSellerUseCase.execute(
        request.params.id, request.body.isSeller
      )

      return response
        .status(200)
        .send({ message: 'User seller updated!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
