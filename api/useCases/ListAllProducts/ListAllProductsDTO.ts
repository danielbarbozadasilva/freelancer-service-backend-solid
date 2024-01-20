import { formatAddressImage } from "../../utils/utils.file"

interface Rating {
  _id: string;
  name: string;
  text: string;
  score: number;
  productId: string;
  userId: string;
}

interface Category {
  _id: string;
  name: string;
  description: string;
  picture: string;
}

interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  cpf: string;
  birthDate: string;
  picture: string;
  country: string;
  phone: string;
  description: string;
  permissions: string[];
  isSeller: boolean;
}

interface Product {
  _id: string;
  userId: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  images: string[];
  deliveryTime: string;
  features: string[];
  sales: number;
  rating: Rating;
  user: User;
}

interface Metadata {
  total: number;
}

export interface DataItem {
  metadata: Metadata[];
  data: Product[];
}

export const productDTO = (data: DataItem[]): any[] => {
  return data[0]?.data.map((item: Product) => {
    return {
      metadata: data[0]?.metadata[0]?.total, 
      data: {
        _id: item._id,
        userId: item.userId,
        title: item.title,
        description: item.description,
        category: {
          _id: item.category._id,
          name: item.category.name,
          description: item.category.description,
          picture: item.category.picture,
        },
        price: item.price,
        images: item.images.map((image: string) => formatAddressImage(image)),
        deliveryTime: item.deliveryTime,
        features: item.features,
        sales: item.sales,
        rating: {
          _id: item?.rating?._id,
          name: item?.rating?.name,
          text: item?.rating?.text,
          score: item?.rating?.score,
          productId: item?.rating?.productId,
          userId: item?.rating?.userId,
        },
        user: {
          _id: item.user._id,
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
          isSeller: item.user.isSeller,
        },
      },
    };
  }) || [];
};