import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { ListAllUsersUseCase } from './ListAllUsersUseCase'

export class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  async handle(request: Request, response: Response) {
    try {
     const result = await this.listAllUsersUseCase.execute()

      return response
      .status(200)
      .send({ message: 'Users successfully listed!', data: result })

    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
