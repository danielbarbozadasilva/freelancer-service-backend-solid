import { ObjectId } from "mongoose"
import { formatAddressImage } from "../../utils/utils.file"
import { formatCurrency, formatarData } from "../../utils/utils.format";

export interface IProductRequestDTO {
  _id?: ObjectId | string;
  title: string
  description: string
  category: ObjectId | string
  price: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales?: number
  rating?: string
  userId: User
}

interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  cpf: string;
  birthDate: Date;
  picture: string[];
  country: string;
  phone: string;
  description: string;
  permissions: string[];
  isSeller: boolean;
  createdAt: Date;
}

export const productDTO = (data: IProductRequestDTO) => {
    let arrayImagesProduct = [];
    let arrayImagesclient = [];

    data.images.map((item)=>{
      arrayImagesProduct.push(formatAddressImage(item))
    })

    data.userId.picture.map((item)=>{
      arrayImagesclient.push(formatAddressImage(item))
    })

    return {
      id: data._id,
      userId: {
        _id: data.userId._id,
        name: data.userId.name,
        username:data.userId.username,
        email: data.userId.email,
        cpf: data.userId.cpf,
        birthDate: formatarData(data.userId.birthDate),
        picture: arrayImagesclient,
        country: data.userId.country,
        phone: data.userId.phone,
        description:data.userId.description,
        permissions: data.userId.permissions,
        isSeller: data.userId.isSeller,
        createdAt: formatarData(data.userId.createdAt),
      },
      title: data.title,
      description: data.description,
      category: data.category,
      price: formatCurrency(data.price),
      images: arrayImagesProduct,
      deliveryTime: data.deliveryTime,
      features: data.features,
      sales: data.sales,
      rating: data.rating,
  }
}
