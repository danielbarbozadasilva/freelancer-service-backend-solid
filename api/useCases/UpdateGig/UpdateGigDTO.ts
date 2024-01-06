import { ObjectId } from "mongoose";

export interface IGigRequestDTO {
  _id?: ObjectId | string;
  userId: ObjectId | string;
  title: string
  desc: string
  totalStars: number
  starNumber: number
  category: ObjectId | string;
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
