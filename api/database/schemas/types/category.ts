import { Document } from 'mongoose'

export interface CategoryInterface extends Document {
  name: string
  description: string
  picture: string[]
}

