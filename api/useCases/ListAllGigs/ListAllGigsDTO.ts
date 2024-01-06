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

export const gigDTO = (data: IGigRequestDTO[]) => {
  return data.map((item) => {
    return {
      userId: item.userId,
      title: item.title,
      desc: item.desc,
      totalStars: item.totalStars,
      starNumber: item.starNumber,
      category: item.category,
      price: item.price,
      cover: formatAddressImage(item.cover),
      images: formatAddressImage(item.images[0]),
      shortTitle: item.shortTitle,
      shortDesc: item.shortDesc,
      deliveryTime: item.deliveryTime,
      revisionNumber: item.revisionNumber,
      features: item.features,
      sales: item.sales,
    }
  })
}
