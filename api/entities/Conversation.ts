import { ObjectId } from "mongoose";

export class Conversation {
    public _id?: ObjectId;
    public id?: string
    public sellerId?: string
    public buyerId?: string
    public readBySeller?: boolean
    public readByBuyer?: boolean
    public lastMessage?: string
    public isSeller?: boolean
  
    constructor(props: Conversation) {
      Object.assign(this, props)
    }
  }
  