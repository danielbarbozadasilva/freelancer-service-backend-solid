import { ObjectId } from "mongoose";

export class Gig {
   public _id?: ObjectId | string;
   public userId: ObjectId | string;
   public title: string
   public desc: string
   public totalStars: number
   public starNumber: number
   public category: ObjectId | string
   public price: number
   public cover: string
   public images: string[]
   public shortTitle: string
   public shortDesc: string
   public deliveryTime: number
   public revisionNumber: number
   public features: string[]
   public sales: number

  constructor(props: Gig) {
    Object.assign(this, props)
  }
}
