import { Rating } from '../entities/Rating'

export interface IRatingRepository {
  createRating(rating: Rating): Promise<boolean>
  updateRating(rating: Rating): Promise<boolean>
  deleteRating(id: string): Promise<boolean>
  findByIdRating(id: string): Promise<Rating>
}
