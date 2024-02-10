import { ObjectId } from "mongoose";

export class Order {
  public _id: ObjectId
  public productId: string
  public title: string
  public price: number
  public userId: string
  public buyerId: string
  public isCompleted: boolean
  public isSeller: boolean
  public payment_intent: string
  public createdAt: Date
  public updatedAt: Date
    
    constructor(props: Order) {
      Object.assign(this, props)
    }
  }
  