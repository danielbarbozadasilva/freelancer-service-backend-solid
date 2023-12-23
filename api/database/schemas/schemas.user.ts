import { model, Schema } from 'mongoose'
import { UserInterface } from './types/user'

const usersSchema = new Schema(
  {
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
    permissions: {
      type: Array,
      default: ['client']
    },
    hash: String,
    salt: String,
    recovery: {
      token: String,
      date: Date
    },
    img: {
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
    desc: {
      type: String,
      required: false
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
