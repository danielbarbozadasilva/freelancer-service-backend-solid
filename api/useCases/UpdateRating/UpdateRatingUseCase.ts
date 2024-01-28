import { Rating } from '../../entities/Rating'
import { IRatingRepository } from '../../repositories/IRatingRepository'
import { IRatingRequestDTO } from './UpdateRatingDTO'

export class UpdateRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(data: IRatingRequestDTO) {
    const ratingUpdate = new Rating(data)
    return this.ratingRepository.updateRating(ratingUpdate)
  }
}
