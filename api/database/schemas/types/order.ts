import { Document } from 'mongoose'

export interface OrderInterface extends Document {
  _id: string
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
