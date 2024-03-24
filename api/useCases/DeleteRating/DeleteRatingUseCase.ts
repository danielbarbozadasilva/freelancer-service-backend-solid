import { IRatingRepository } from '../../repositories/IRatingRepository'

export class DeleteRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  async execute(id: string) {
    const ratingExists: boolean = await this.ratingRepository.verifyIdRatingExists(id)
    if(!ratingExists){
      throw new Error('Essa avaliação não existe!');
    }
    return await this.ratingRepository.deleteRating(id)
  }
}
