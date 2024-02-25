import { IRatingRepository } from '../../repositories/IRatingRepository'

export class DeleteRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(id: string) {
    return this.ratingRepository.deleteRating(id)
  }
}
