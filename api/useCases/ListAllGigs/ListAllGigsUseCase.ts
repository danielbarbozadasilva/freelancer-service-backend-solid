import { IGigRepository } from '../../repositories/IGigRepository'

export class ListAllGigsUseCase {
  constructor(private gigsRepository: IGigRepository) {}

  async execute(data: object) {
    return this.gigsRepository.listAllGigs(data)
  }
}
