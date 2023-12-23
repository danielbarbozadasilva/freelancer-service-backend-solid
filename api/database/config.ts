  require('dotenv').config({
      path: process.env.NODE_ENV === 'development' ? '.env.test' : '.env'
  })
  
  export default {
    uri: `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`
  }
  