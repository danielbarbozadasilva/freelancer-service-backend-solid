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

export const productDTO = (data: IProductRequestDTO[]) => {
  return data.map((item) => {
    return {
      id: item._id,
      userId: item.userId,
      title: item.title,
      description: item.description,
      category: item.category,
      price: item.price,
      promotion: item.promotion,
      images: formatAddressImage(item.images[0]),
      deliveryTime: item.deliveryTime,
      features: item.features,
      sales: item.sales,
      rating: item.rating,
    }
  })
}
