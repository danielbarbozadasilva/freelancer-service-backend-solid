import mongoose, { Schema } from 'mongoose'
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
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<CategoryInterface>('categoryschemas', categorySchema)
