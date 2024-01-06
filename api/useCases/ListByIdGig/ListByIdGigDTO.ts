import { ObjectId } from "mongoose"
import { formatAddressImage } from "../../utils/utils.file"

export interface IGigRequestDTO {
  _id?: ObjectId | string
  userId: ObjectId | string
  title: string
  desc: string
  totalStars: number
  starNumber: number
  category: ObjectId | string
  price: number
  cover: string
  images: string[]
  shortTitle: string
  shortDesc: string
  deliveryTime: number
  revisionNumber: number
  features: string[]
  sales: number
}

export const gigDTO = (data: IGigRequestDTO) => {
    return {
      userId: data.userId,
      title: data.title,
      desc: data.desc,
      totalStars: data.totalStars,
      starNumber: data.starNumber,
      category: data.category,
      price: data.price,
      cover: formatAddressImage(data.cover),
      images: formatAddressImage(data.images[0]),
      shortTitle: data.shortTitle,
      shortDesc: data.shortDesc,
      deliveryTime: data.deliveryTime,
      revisionNumber: data.revisionNumber,
      features: data.features,
      sales: data.sales,
  }
}
