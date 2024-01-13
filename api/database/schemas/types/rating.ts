import { Document } from 'mongoose'

export interface RatingInterface extends Document {
  _id: string
  name: string
  text: string
  score: string
  productId: string
  userId: string
}
