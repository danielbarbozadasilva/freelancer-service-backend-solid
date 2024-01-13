import { Document } from 'mongoose'

export interface UserInterface extends Document {
  username: string
  email: string
  picture: string[]
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
  isSeller: Boolean,
  permissions: string[]
}

