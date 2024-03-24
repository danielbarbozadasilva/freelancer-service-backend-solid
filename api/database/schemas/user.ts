import mongoose, { Schema } from 'mongoose'
import { UserInterface } from './types/user'

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      lowerCase: true,
      unique: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    },
    birthDate: { 
      type: Date, 
      required: true 
    },
    picture: { 
      type: String, 
      required: false 
    },
    country: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    hash: String,
    salt: String,
    recovery: {
      token: String,
      date: Date
    },
    isSeller: {
      type: Boolean,
      default: false
    },
    permissions: { 
      type: Array, 
      default: [] 
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<UserInterface>('userschemas', usersSchema)
