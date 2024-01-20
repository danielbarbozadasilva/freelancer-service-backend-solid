import { ObjectId } from "mongoose"

export interface IGigRequestDTO {
  userId: ObjectId
  title: string
  description: string
  category: ObjectId
  price: number
  images: any
  deliveryTime: string
  features: string[]
  sales: number
  rating?: string[]
}