import { Document } from 'mongoose'

export interface MessageInterface extends Document {
  conversationId: string
  userId: string
  description: string
}
