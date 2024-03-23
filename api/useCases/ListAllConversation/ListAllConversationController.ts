import { Request, Response } from 'express'
import { ListAllConversationUseCase } from './ListAllConversationUseCase'

export class ListAllConversationController {
  constructor(private conversationUseCase: ListAllConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const data = await this.conversationUseCase.execute({
        isSeller: JSON.parse(request.params.isSeller),
        userId: request.params.userId
      })

      return response
        .status(200)
        .send({ message: 'Conversa listada com sucesso!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
