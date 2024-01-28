import { IRatingRepository } from '../../repositories/IRatingRepository'

export class ListByIdRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(id: string) {
    return this.ratingRepository.findByIdRating(id)
  }
}
