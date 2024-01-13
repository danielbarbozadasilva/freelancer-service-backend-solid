import { ObjectId } from "mongoose"

export interface IGigRequestDTO {
  userId: ObjectId
  title: string
  description: string
  category: ObjectId
  price: number
  promotion: number
  images: any
  deliveryTime: number
  features: string[]
  sales: number
  rating?: string[]
}