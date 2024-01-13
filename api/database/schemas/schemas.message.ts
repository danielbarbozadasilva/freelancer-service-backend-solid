import { model, Schema } from 'mongoose'
import { MessageInterface } from './types/message'

const messageSchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: 'conversationschemas',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'userschemas',
      required: true,
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model<MessageInterface>('messageschemas', messageSchema)
