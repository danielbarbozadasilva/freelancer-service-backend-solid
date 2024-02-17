import { Document, ObjectId } from 'mongoose'

export interface OrderInterface extends Document {
  _id: ObjectId
  productId: string
  title: string
  description: string
  status: string
  price: number
  userId: string
  buyerId: string
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
}
