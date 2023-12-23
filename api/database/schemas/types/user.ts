import { Document } from 'mongoose'

export interface UserInterface extends Document {
  username: string
  email: string
  permissions: string[]
  hash: string
  salt: string
  recovery: {
    token: String,
    date: Date
  },
  img: String,
  country: String,
  phone: String,
  desc: String,
  isSeller: Boolean
}

