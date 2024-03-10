import { ObjectId } from 'mongoose'
import { formatCurrency, formatarData, formatarDataHora } from '../../utils/format'

export interface IOrdersRequestDTO {
  _id: ObjectId
  productId: string
  title: string
  description: string
  price: number
  userId: string
  buyerId: string
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
  product?: {
    _id: string
    userId: string
    title: string
    description: string
    category: string
    price: number
    images: string[]
    deliveryTime: string
    features: string[]
    sales: number
    rating: string[]
  }
  buyer?: {
    _id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
    createdAt: Date
  }
  user?: {
    _id: string
    name: string
    username: string
    email: string
    cpf: string
    birthDate: Date
    picture: string
    country: string
    phone: string
    description: string
    permissions: string[]
    isSeller: boolean
    createdAt: Date
  }
}

export const ordersDTO = (data: IOrdersRequestDTO[]) => {
  return data.map((item) => {
    return {
      id: item._id,
      title: item.title,
      description: item.description,
      price: formatCurrency(item.price),
      isCompleted: item.isCompleted,
      status: item.isCompleted ? 'Finalizada' : 'Em andamento',
      isSeller: item.isSeller,
      payment_intent: item.payment_intent,
      createdAt: formatarDataHora(item.createdAt),
      product: {
        id: item.product?._id,
        title: item.product?.title,
        description: item.product?.description,
        category: item.product?.category,
        price: formatCurrency(item.product?.price),
        deliveryTime: item.product?.deliveryTime,
        features: item.product?.features,
        sales: item.product?.sales,
        rating: item.product?.rating
      },
      user: {
        id: item.user?._id,
        name: item.user?.name,
        username: item.user?.username,
        email: item.user?.email,
        cpf: item.user?.cpf,
        birthDate: item.user?.birthDate,
        picture: item.user?.picture,
        country: item.user?.country,
        phone: item.user?.phone,
        description: item.user?.description,
        permissions: item.user?.permissions,
        isSeller: item.user?.isSeller,
        createdAt: item.user?.createdAt ? formatarDataHora(item.user?.createdAt) : null,
      },
      buyer: {
        id: item.buyer?._id,
        name: item.buyer?.name,
        username: item.buyer?.username,
        email: item.buyer?.email,
        cpf: item.buyer?.cpf,
        birthDate: item.buyer?.birthDate ? formatarData(item.buyer?.birthDate) : null,
        picture: item.buyer?.picture,
        country: item.buyer?.country,
        phone: item.buyer?.phone,
        description: item.buyer?.description,
        permissions: item.buyer?.permissions,
        isSeller: item.buyer?.isSeller,
        createdAt: item.buyer?.createdAt ? formatarDataHora(item.buyer?.createdAt) : null,
      }
    }
  })
}
