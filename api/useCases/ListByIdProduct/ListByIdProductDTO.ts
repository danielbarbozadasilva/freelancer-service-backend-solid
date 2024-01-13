import { ObjectId } from "mongoose"
import { formatAddressImage } from "../../utils/utils.file"

export interface IProductRequestDTO {
  _id?: ObjectId | string;
  userId: ObjectId | string;
  title: string
  description: string
  category: ObjectId | string
  price: number
  promotion: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating?: string
}

export const productDTO = (data: IProductRequestDTO) => {
    return {
      id: data._id,
      userId: data.userId,
      title: data.title,
      description: data.description,
      category: data.category,
      price: data.price,
      promotion: data.promotion,
      images: formatAddressImage(data.images[0]),
      deliveryTime: data.deliveryTime,
      features: data.features,
      sales: data.sales,
      rating: data.rating,
  }
}
