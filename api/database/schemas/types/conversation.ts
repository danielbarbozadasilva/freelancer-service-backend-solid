import { Document } from 'mongoose'

export interface ConversationInterface extends Document {
  id: string
  sellerId: string
  buyerId: string
  readBySeller: boolean
  readByBuyer: boolean
  lastMessage: string
  to: string
}

