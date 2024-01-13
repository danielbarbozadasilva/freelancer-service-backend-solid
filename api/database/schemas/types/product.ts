import { Document } from 'mongoose'

export interface ProductInterface extends Document {
  _id: string
  userId: string
  title: string
  description: string
  category: string
  price: number
  promotion: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating: string
}
