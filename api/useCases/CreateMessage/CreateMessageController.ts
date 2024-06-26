import { Request, Response } from 'express'
import { CreateMessageUseCase } from './CreateMessageUseCase'

export class CreateMessageController {
  constructor(private createMessageUseCase: CreateMessageUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.createMessageUseCase.execute({
        conversationId: request.body.conversationId,
        userId: request.body.userId,
        description: request.body.description,
        readBySeller: request.body.isSeller,
        readByBuyer: !request.body.isSeller,
        lastMessage: request.body.description
       })

      return response
        .status(201)
        .send({ message: 'Mensagem criada com sucesso!', data: result})
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
