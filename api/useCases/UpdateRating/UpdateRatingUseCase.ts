import { Rating } from '../../entities/Rating'
import { IRatingRepository } from '../../repositories/IRatingRepository'
import { IRatingRequestDTO } from './UpdateRatingDTO'

export class UpdateRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(data: IRatingRequestDTO) {
    const ratingUpdate = new Rating(data)
    const result = await this.ratingRepository.verifyIdRatingExists(data.id)
    
    if(!result){
      throw new Error('Avaliação inexistente!');
    }
    return await this.ratingRepository.updateRating(ratingUpdate)
  }
}
