import { model, Schema } from 'mongoose'
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
      type: Array, 
      default: [] 
    },
    country: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    },
    desc: {
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
    }
  },
  {
    timestamps: true
  }
)

export default model<UserInterface>('userschemas', usersSchema)
