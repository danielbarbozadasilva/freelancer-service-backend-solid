import { formatAddressImage } from '../../utils/multer'
import { formatCurrency } from '../../utils/format'

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

export interface Product {
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
  orders: Order[]
}

interface Metadata {
  total: number
}

export interface DataItem {
  metadata: Metadata[]
  data: Product[]
}

export const productDTO = async (data: DataItem[]): Promise<any[]> => {
  const formattedData = await Promise.all(
    data[0]?.data.map(async (item: Product) => {
      const formattedImages = await Promise.all(
        item.images.map(
          async (image: string) => await formatAddressImage(image)
        )
      )

      const formattedCategory = item.category
        ? {
            id: item.category._id,
            name: item.category.name,
            description: item.category.description,
            picture: await formatAddressImage(item.category.picture)
          }
        : null

      const formattedRating = item.rating
        ? {
            id: item.rating._id,
            name: item.rating.name,
            text: item.rating.text,
            score: item.rating.score,
            productId: item.rating.productId,
            userId: item.rating.userId
          }
        : null

      const formattedUser = item.user
        ? {
            id: item.user._id,
            name: item.user.name,
            username: item.user.username,
            email: item.user.email,
            cpf: item.user.cpf,
            birthDate: item.user.birthDate,
            picture: await formatAddressImage(item.user.picture),
            country: item.user.country,
            phone: item.user.phone,
            description: item.user.description,
            permissions: item.user.permissions,
            isSeller: item.user.isSeller
          }
        : null

      const formattedClient = item.client
        ? {
            id: item.client._id,
            name: item.client.name,
            username: item.client.username,
            email: item.client.email,
            cpf: item.client.cpf,
            birthDate: item.client.birthDate,
            picture: await formatAddressImage(item.client.picture),
            country: item.client.country,
            phone: item.client.phone,
            description: item.client.description,
            permissions: item.client.permissions,
            isSeller: item.client.isSeller
          }
        : null

      const formattedOrders = item.orders.map((item2) => ({
        id: item2._id,
        productId: item2.productId,
        title: item2.title,
        description: item2.description,
        status: item2.status,
        price: item2.price,
        userId: item2.userId,
        buyerId: item2.buyerId,
        isCompleted: item2.isCompleted,
        isSeller: item2.isSeller,
        payment_intent: item2.payment_intent,
        createdAt: item2.createdAt,
        updatedAt: item2.updatedAt
      }))

      return {
        metadata: data[0]?.metadata[0]?.total,
        data: {
          id: item._id,
          userId: item.userId,
          title: item.title,
          description: item.description,
          category: formattedCategory,
          price: item.price,
          priceFormated: formatCurrency(item.price),
          images: formattedImages,
          deliveryTime: item.deliveryTime,
          features: item.features,
          sales: item.sales,
          rating: formattedRating,
          user: formattedUser,
          client: formattedClient,
          orders: formattedOrders
        }
      }
    })
  )

  return formattedData || []
}
