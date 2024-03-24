import { Rating } from '../../entities/Rating'
import { IRatingRepository } from '../../repositories/IRatingRepository'
import { IRatingRequestDTO } from './CreateRatingDTO'

export class CreateRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(data: IRatingRequestDTO) {
    const ratingCreate = new Rating(data)
    return await this.ratingRepository.createRating(ratingCreate)
  }
}
