import { ObjectId } from "mongoose"

export interface IMessageRequestDTO {
  _id?: ObjectId | string
  conversationId: string
  userId: string
  description: string
  readBySeller?: boolean
  readByBuyer?: boolean
  lastMessage?: string
}