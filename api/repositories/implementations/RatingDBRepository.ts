import { IRatingRepository } from '../IRatingRepository'
import { Rating } from '../../entities/Rating'
import ratingSchema from '../../database/schemas/schemas.rating'

export class RatingDBRepository implements IRatingRepository {
  async createRating(dataRating: Rating): Promise<boolean> {
    const resultDB = await ratingSchema.create({
      name: dataRating.name,
      text: dataRating.text,
      score: dataRating.score,
      productId: dataRating.productId,
      userId: dataRating.userId
    })

    return !!resultDB
  }

  async updateRating(dataRating: Rating): Promise<boolean> {
    const resultDB = await ratingSchema.updateOne(
      { _id: dataRating.id },
      {
        name: dataRating.name,
        text: dataRating.text,
        score: dataRating.score,
        productId: dataRating.productId,
        userId: dataRating.userId
      }
    )

    return !!resultDB
  }

  async deleteRating(id: string): Promise<boolean> {
    const result = await ratingSchema.findByIdAndDelete(id)
    return !!result
  }

  async findByIdRating(id: string): Promise<any> {
    const result = await ratingSchema.find({ productId: id })
    let totalScore = 0;
    result.forEach((rating) => {
        totalScore += parseInt(rating.score, 10)
    });
    const averageScore = result.length > 0 ? totalScore / result.length : 0

    return { result, averageScore }
  }

  async verifyIdRatingExists(id: string): Promise<boolean> {
    const result = await ratingSchema.findById(id)
    return !!result
  }
}
