import { ObjectId } from "mongoose"

export interface IListConversationRequestDTO {
  id?: string
  _id?: ObjectId
  sellerId?: string
  buyerId?: string
  readBySeller?: boolean
  readByBuyer?: boolean
  lastMessage?: string
  isSeller?: boolean
  userId?: string
  to?: string
}
