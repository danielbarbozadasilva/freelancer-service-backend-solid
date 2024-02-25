import { model, Schema } from 'mongoose'
import { ProductInterface } from './types/product'

const productschemas = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'userschemas',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categoryschemas',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    features: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
    rating: { 
        type: Schema.Types.ObjectId, 
        ref: 'ratingschemas' 
    }
  },
  {
    timestamps: true,
  }
);

export default model<ProductInterface>('productschemas', productschemas)
