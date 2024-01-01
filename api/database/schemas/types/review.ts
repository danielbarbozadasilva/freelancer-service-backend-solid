import { Document } from 'mongoose'

export interface ReviewInterface extends Document {
  gigId: string
  userId: string
  star: number
  desc: string
}
