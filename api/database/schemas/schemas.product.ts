import { model, Schema } from 'mongoose'
import { ProductInterface } from './types/product'

const productSchema = new Schema(
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
    promotion: { 
      type: Number, 
      default: 0 
    },
    images: {
      type: [String],
      required: false,
    },
    deliveryTime: {
      type: Number,
      required: true,
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
      type: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'ratingschemas' 
      }] 
    }
  },
  {
    timestamps: true,
  }
);

export default model<ProductInterface>('productschemas', productSchema)
