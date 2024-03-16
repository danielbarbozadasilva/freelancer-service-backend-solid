import { AuthValidation } from './auth'
import { CategoryValidation } from './categories'
import { ConversationValidation } from './conversation'
import { MessageValidation } from './message'
import { OrderValidation } from './order'
import { ProductValidation } from './product'
import { RegisterValidation } from './register'
import { RatingValidation } from './rating'

const authValidation = new AuthValidation()
const categoryValidation = new CategoryValidation()
const conversationValidation = new ConversationValidation()
const messageValidation = new MessageValidation()
const orderValidation = new OrderValidation();
const productValidation = new ProductValidation()
const registerValidation = new RegisterValidation()
const ratingValidation = new RatingValidation()

export {
  authValidation,
  categoryValidation,
  conversationValidation,
  messageValidation,
  orderValidation,
  productValidation,
  ratingValidation,
  registerValidation
}
