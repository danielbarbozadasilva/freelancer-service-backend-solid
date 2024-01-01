import { Request, Response } from 'express'
import { UpdateConversationUseCase } from './UpdateConversationUseCase'

export class UpdateConversationController {
  constructor(private updateConversationUseCase: UpdateConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      
      await this.updateConversationUseCase.execute(id, {
        id: request.body.isSeller ? request.body.userId + request.body.to : request.body.to + request.body.userId,
        sellerId: request.body.isSeller ? request.body.userId : request.body.to,
        buyerId: request.body.isSeller ? request.body.to : request.body.userId,
        readBySeller: request.body.isSeller,
        readByBuyer: !request.body.isSeller,
      })

      return response
        .status(200)
        .send({ message: 'Conversation successfully updated!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
