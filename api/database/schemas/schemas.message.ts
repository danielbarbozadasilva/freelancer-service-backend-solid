import { model, Schema } from 'mongoose'
import { MessageInterface } from './types/message'

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model<MessageInterface>('messageSchemas', messageSchema)
