export interface IUpdateOrderUseCaseDTO {
  payment_intent: string
}

interface Product {
  _id: string
  userId: {
    _id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string[]
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
    createdAt: Date
  }
  title: string
  description: string
  status: string
  price: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating: string
}

interface User {
  _id: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: Date
  picture: string[]
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
  createdAt: Date
}

export interface OrderData {
  _id: string
  productId: Product
  title: string
  description: string
  status: string
  price: number
  userId: User
  buyerId: User
  isCompleted: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
  __v: number
}
