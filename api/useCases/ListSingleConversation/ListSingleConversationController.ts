import { Request, Response } from 'express'
import { ListByIdConversationUseCase } from './ListSingleConversationUseCase'

export class ListByIdConversationController {
  constructor(private listByIdConversationUseCase: ListByIdConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const userId: string = request.params.userId
      const buyerId: string = request.params.buyerId
      const data = await this.listByIdConversationUseCase.execute({ userId, buyerId })

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
