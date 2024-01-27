import { ObjectId } from "mongoose";

export class Product {
   public _id?: ObjectId | string;
   public userId: ObjectId | string;
   public title: string
   public description: string
   public category: ObjectId | string
   public price: number
   public images: string[]
   public deliveryTime: string
   public features: string[]
   public sales?: number
   public rating?: string

  constructor(props: Product) {
    Object.assign(this, props)
  }
}
