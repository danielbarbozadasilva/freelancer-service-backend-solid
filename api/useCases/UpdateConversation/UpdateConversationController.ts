import { Request, Response } from 'express'
import { UpdateConversationUseCase } from './UpdateConversationUseCase'

export class UpdateConversationController {
  constructor(private updateConversationUseCase: UpdateConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      console.log('id'+id)
      console.log('request.body.isSeller'+request.body.isSeller)
      await this.updateConversationUseCase.execute(id, request.body.isSeller)

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
