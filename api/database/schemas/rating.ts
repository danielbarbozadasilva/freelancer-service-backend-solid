import mongoose, { Schema } from 'mongoose'
import { RatingInterface } from './types/rating'

const ratingSchema = new Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    score: { type: String, default: 1 },
    productId: { type: Schema.Types.ObjectId, ref: 'productschemas', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'userschemas', required: true }
  },
  { timestamps: true }
)

export default mongoose.model<RatingInterface>('ratingschemas', ratingSchema)
