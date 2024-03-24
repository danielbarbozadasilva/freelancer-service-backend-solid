import { formatCurrency, formatarData, formatarDataHora } from '../../utils/format'

export interface IOrderRequestDTO {
  userId: string
  isSeller: any
}

export interface IOrderResultDTO {
  _id: string
  description: string
  productId: {
    _id: string
    userId: string
    title: string
    description: string
    category: string
    price: number
    images: string[]
    deliveryTime: number
    features: string[]
    sales: number
    rating: string
  }
  title: string
  price: number
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
  buyerId: {
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
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
}

export const orderDTO = (data: IOrderResultDTO[]) => {
  return data.map((item) => {
    return {
      _id: item._id,
      title: item.title,
      description: item.description,
      price: formatCurrency(item.price),
      isCompleted: item.isCompleted,
      isSeller: item.isSeller,
      payment_intent: item.payment_intent,
      createdAt: formatarDataHora(item.createdAt),
      updatedAt: item.updatedAt,
      product: item.productId,
      user: {
        _id: item.userId._id,
        name: item.userId.name,
        username: item.userId.username,
        email: item.userId.email,
        cpf: item.userId.cpf,
        birthDate: formatarData(item.userId.birthDate),
        country: item.userId.country,
        phone: item.userId.phone,
        description: item.userId.description,
        permissions: item.userId.permissions,
        isSeller: item.userId.isSeller,
        createdAt: formatarData(item.userId.createdAt)
      },
      buyer: {
        _id: item.buyerId._id,
        name: item.buyerId.name,
        username: item.buyerId.username,
        email: item.buyerId.email,
        cpf: item.buyerId.cpf,
        birthDate: formatarData(item.buyerId.birthDate),
        country: item.buyerId.country,
        phone: item.buyerId.phone,
        description: item.buyerId.description,
        permissions: item.buyerId.permissions,
        isSeller: item.buyerId.isSeller,
        createdAt: formatarData(item.buyerId.createdAt)
      }
    }
  })
}
