import { Request, Response } from 'express'
import { ListMessageUseCase } from './ListMessageUseCase'

export class ListMessageController {
  constructor(private listMessageUseCase: ListMessageUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const result = await this.listMessageUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'Mensagem listada com sucesso!', data: result })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
