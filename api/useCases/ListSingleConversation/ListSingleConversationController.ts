import { Request, Response } from 'express'
import { ListByIdConversationUseCase } from './ListSingleConversationUseCase'

export class ListByIdConversationController {
  constructor(private listByIdConversationUseCase: ListByIdConversationUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const data = await this.listByIdConversationUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'List conversation successfully!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
