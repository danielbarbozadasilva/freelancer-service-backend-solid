import { Request, Response } from 'express'
import { CreateConversationUseCase } from './CreateConversationUseCase'

export class CreateConversationController {
  constructor(private createConversationUseCase: CreateConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.createConversationUseCase.execute({
        id: request.body.isSeller ? request.body.userId + request.body.to : request.body.to + request.body.userId,
        sellerId: request.body.isSeller ? request.body.userId : request.body.to,
        buyerId: request.body.isSeller ? request.body.to : request.body.userId,
        readBySeller: request.body.isSeller,
        readByBuyer: !request.body.isSeller,
      })

      return response
        .status(201)
        .send({ message: 'Conversation successfully created!', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
