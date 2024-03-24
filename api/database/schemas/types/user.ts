import { Document } from 'mongoose'

export interface UserInterface extends Document {
  _id: string,
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  hash: string
  salt: string
  recovery: {
    token: string,
    date: Date
  },
  isSeller: boolean
}

