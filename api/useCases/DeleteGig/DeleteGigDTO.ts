import { ObjectId } from "mongoose"

export interface IGigRequestDTO {
  _id?: string
  userId: string
  title: string
  desc: string
  totalStars: number
  starNumber: number
  category: string
  price: number
  cover: string
  images: string[]
  shortTitle: string
  shortDesc: string
  deliveryTime: number
  revisionNumber: number
  features: string[]
  sales: number
}