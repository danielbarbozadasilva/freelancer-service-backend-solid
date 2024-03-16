import mongoose from 'mongoose'
import db from './config'

export const createConnection = () => {
  if (mongoose.connection.readyState !== 1) {
      mongoose.set('strictQuery', true)
      mongoose.connect(db.uri, (err) => {
      if (err)
        console.log(
          `MongoDB is ${mongoose.STATES[mongoose.connection.readyState]}\n${err}`
        )
    })
  }
}

export const closeConnection = async () => {
  await mongoose.connection.close()
}