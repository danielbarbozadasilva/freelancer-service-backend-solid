import { Request, Response } from 'express'
import { ListAllUsersUseCase } from './ListAllUsersUseCase'
import { listClientDTO } from './ListAllUsersDTO'

export class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  async handle(request: Request, response: Response) {
    try {
     const result = await this.listAllUsersUseCase.execute()

      return response
      .status(200)
      .send({ message: 'Users successfully listed!', data: listClientDTO(result) })

    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
