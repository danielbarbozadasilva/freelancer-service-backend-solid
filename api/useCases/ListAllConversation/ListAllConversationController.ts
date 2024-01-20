import { Request, Response } from 'express'
import { ListAllConversationUseCase } from './ListAllConversationUseCase'

export class ListAllConversationController {
  constructor(private conversationUseCase: ListAllConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const data = await this.conversationUseCase.execute()

      return response
        .status(200)
        .send({ message: 'Conversation successfully listed!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
