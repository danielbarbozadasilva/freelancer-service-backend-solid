import { Request, Response } from 'express'
import { ListByIdUserUseCase } from './ListByIdUserUseCase'
import { listUserDTO } from './ListByIdUserDTO'

export class ListByIdUserController {
  constructor(private listByIdUserUseCase: ListByIdUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const idUser = request.params.id
      const data = await this.listByIdUserUseCase.execute(idUser)

      return response
        .status(200)
        .send({ message: 'User listed!', data: await listUserDTO(data) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
