import { Request, Response } from 'express'
import { ListByIdGigUseCase } from './ListByIdGigUseCase'
import { gigDTO } from './ListByIdGigDTO'

export class ListByIdGigController {
  constructor(private listByIdGigUseCase: ListByIdGigUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      const result = await this.listByIdGigUseCase.execute(id)

      return response
      .status(200)
      .send({ message: 'List Gig successfully!', data: gigDTO(result) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
