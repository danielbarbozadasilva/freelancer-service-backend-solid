import { Request, Response } from 'express'
import { ListAllGigsUseCase } from './ListAllGigsUseCase'
import { gigDTO } from './ListAllGigsDTO'

export class ListAllGigsController {
  constructor(private listAllGigsUseCase: ListAllGigsUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const search = request.query;
      const result = await this.listAllGigsUseCase.execute(search)
      return response
        .status(200)
        .send({ message: 'List all gigs successfully!', data: gigDTO(result) })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
