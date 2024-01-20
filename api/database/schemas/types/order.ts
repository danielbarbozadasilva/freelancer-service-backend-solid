import { Document } from 'mongoose'

export interface OrderInterface extends Document {
  productId: string
  title: string
  price: number
  userId: string
  buyerId: string
  isCompleted: boolean
  payment_intent: string
}
