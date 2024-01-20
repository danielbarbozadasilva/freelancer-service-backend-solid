import { Document } from 'mongoose'

export interface ProductInterface extends Document {
  _id: string
  userId: string
  title: string
  description: string
  category: string
  price: number
  images: string[]
  deliveryTime: string
  features: string[]
  sales: number
  rating: string
}
