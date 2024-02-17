import { formatAddressImage } from '../../utils/utils.file'
import { formatCurrency } from '../../utils/utils.format'

interface Rating {
  _id: string
  name: string
  text: string
  score: number
  productId: string
  userId: string
}

interface Category {
  _id: string
  name: string
  description: string
  picture: string
}

interface User {
  _id: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
}

interface Client {
  _id: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  isSeller: boolean
}

interface Order {
  _id: string
  productId: string
  title: string
  description: string
  status: string
  price: number
  userId: string
  buyerId: string
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
}

interface Product {
  _id: string
  userId: string
  title: string
  description: string
  category: Category
  price: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating: Rating
  user: User
  client: Client
  orders: Order
}

interface Metadata {
  total: number
}

export interface DataItem {
  metadata: Metadata[]
  data: Product[]
}

export const productDTO = (data: DataItem[]): any[] => {
  return (
    data[0]?.data.map((item: Product) => {
      return {
        metadata: data[0]?.metadata[0]?.total,
        data: {
          id: item._id,
          userId: item.userId,
          title: item.title,
          description: item.description,
          category: {
            id: item.category._id,
            name: item.category.name,
            description: item.category.description,
            picture: item.category.picture
          },
          price: item.price,
          priceFormated: formatCurrency(item.price),
          images: item.images.map((image: string) => formatAddressImage(image)),
          deliveryTime: item.deliveryTime,
          features: item.features,
          sales: item.sales,
          rating: {
            id: item.rating?._id,
            name: item.rating?.name,
            text: item.rating?.text,
            score: item.rating?.score,
            productId: item.rating?.productId,
            userId: item.rating?.userId
          },
          user: {
            id: item.user._id,
            name: item.user.name,
            username: item.user.username,
            email: item.user.email,
            cpf: item.user.cpf,
            birthDate: item.user.birthDate,
            picture: item.user.picture,
            country: item.user.country,
            phone: item.user.phone,
            description: item.user.description,
            permissions: item.user.permissions,
            isSeller: item.user.isSeller
          },
          client: {
            id: item.client?._id,
            name: item.client?.name,
            username: item.client?.username,
            email: item.client?.email,
            cpf: item.client?.cpf,
            birthDate: item.client?.birthDate,
            picture: item.client?.picture,
            country: item.client?.country,
            phone: item.client?.phone,
            description: item.client?.description,
            permissions: item.client?.permissions,
            isSeller: item.client?.isSeller
          },
          orders: {
            id: item.orders?._id,
            productId: item.orders?.productId,
            title: item.orders?.title,
            description: item.orders?.description,
            status: item.orders?.status,
            price: item.orders?.price,
            userId: item.orders?.userId,
            buyerId: item.orders?.buyerId,
            isCompleted: item.orders?.isCompleted,
            isSeller: item.orders?.isSeller,
            payment_intent: item.orders?.payment_intent,
            createdAt: item.orders?.createdAt,
            updatedAt: item.orders?.updatedAt,
          }
        }
      }
    }) || []
  )
}
