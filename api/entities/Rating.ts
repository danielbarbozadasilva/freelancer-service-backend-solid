import { ObjectId } from "mongoose";

export class Rating {
   public _id?: ObjectId | string
   public name: string
   public text: string
   public score: string
   public productId: ObjectId | string
   public userId: ObjectId | string

  constructor(props: Rating) {
    Object.assign(this, props)
  }
}
