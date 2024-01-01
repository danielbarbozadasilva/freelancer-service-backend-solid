import { Document } from 'mongoose'

export interface OrderInterface extends Document {
  gigId: string
  img: string
  title: string
  price: number
  sellerId: string
  buyerId: string
  isCompleted: boolean
  payment_intent: string
}
