import { ObjectId } from "mongoose"

export interface ICreateGigRequestDTO {
  userId: ObjectId
  title: string
  desc: string
  totalStars: number
  starNumber: number
  category: ObjectId
  price: number
  cover: string
  images: any
  shortTitle: string
  shortDesc: string
  deliveryTime: number
  revisionNumber: number
  features: string[]
  sales: number
}
