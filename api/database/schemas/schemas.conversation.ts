import mongoose, { Schema } from 'mongoose'
import { ConversationInterface } from './types/conversation'

const conversationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: 'userschemas',
      required: true,
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: 'userschemas',
      required: true,
    },
    readBySeller: {
      type: Boolean,
      required: true,
    },
    readByBuyer: {
      type: Boolean,
      required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<ConversationInterface>('conversationschemas', conversationSchema)
