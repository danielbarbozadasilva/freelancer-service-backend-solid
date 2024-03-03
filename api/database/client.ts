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

// export const postmanToOpenApi = async ()=>{
//   // Require Package
// const postmanToOpenApi = require('postman-to-openapi')

// // Postman Collection Path
// const postmanCollection = (`C:\\docs\\API-FREELANCE.postman_collection.json`)
// const outputFile = (`C:\\docs\\collection.yml`)

// // Async/await
// try {
//     const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
//     // Without save the result in a file
//     const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
//     console.log(`OpenAPI specs: ${result}`)
// } catch (err) {
//     console.log(err)
// }

// // Promise callback style
// postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
//     .then(result => {
//         console.log(`OpenAPI specs: ${result}`)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }