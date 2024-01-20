import { model, Schema } from 'mongoose'
import { CategoryInterface } from './types/category'

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: { 
      type: Array, 
      default: [] 
    },
  },
  {
    timestamps: true,
  }
)

export default model<CategoryInterface>('categoryschemas', categorySchema)
