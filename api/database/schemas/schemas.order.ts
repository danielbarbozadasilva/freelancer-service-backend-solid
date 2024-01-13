import { model, Schema } from 'mongoose'
import { OrderInterface } from './types/order'

const orderSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'userschemas', 
      required: true 
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<OrderInterface>('orderschemas', orderSchema)
