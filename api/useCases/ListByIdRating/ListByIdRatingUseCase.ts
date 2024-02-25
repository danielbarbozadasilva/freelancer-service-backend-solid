import { IRatingRepository } from '../../repositories/IRatingRepository'

export class ListByIdRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(id: string) {
    const result = this.ratingRepository.verifyIdRatingExists(id)
    if (!result) {
      throw new Error('Avaliação não existente!')
    }
    return this.ratingRepository.findByIdRating(id)
  }
}
