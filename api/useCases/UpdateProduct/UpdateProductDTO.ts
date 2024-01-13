import { ObjectId } from "mongoose";

export interface IProductRequestDTO {
  _id?: ObjectId | string;
  userId: ObjectId | string;
  title: string
  description: string
  category: ObjectId | string
  price: number
  promotion: number
  images: any
  deliveryTime: number
  features: string[]
  sales: number
  rating?: string
}
