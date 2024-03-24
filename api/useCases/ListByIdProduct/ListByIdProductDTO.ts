import { formatAddressImage } from '../../utils/multer'
import { formatCurrency, formatarData } from '../../utils/format'

export interface IProductRequestDTO {
  _id?: string
  id?: string
  title: string
  description: string
  category: string
  price: string
  images: string[]
  deliveryTime: number
  features: string[]
  sales?: number
  rating?: string
  userId: User
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
  createdAt: string
}

export const productDTO = async (data: IProductRequestDTO): Promise<IProductRequestDTO> => {
  let arrayImagesProduct = []

  data.images.map(async (item) => {
    arrayImagesProduct.push(await formatAddressImage(item))
  })

  return {
    id: data._id,
    userId: {
      _id: data.userId._id,
      name: data.userId.name,
      username: data.userId.username,
      email: data.userId.email,
      cpf: data.userId.cpf,
      birthDate: formatarData(data.userId.birthDate),
      picture: await formatAddressImage(data.userId.picture),
      country: data.userId.country,
      phone: data.userId.phone,
      description: data.userId.description,
      permissions: data.userId.permissions,
      isSeller: data.userId.isSeller,
      createdAt: formatarData(data.userId.createdAt)
    },
    title: data.title,
    description: data.description,
    category: data.category,
    price: formatCurrency(data.price),
    images: arrayImagesProduct,
    deliveryTime: data.deliveryTime,
    features: data.features,
    sales: data.sales,
    rating: data.rating
  }
}
