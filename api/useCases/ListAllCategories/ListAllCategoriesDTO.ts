import { formatAddressImage } from "../../utils/file"

export interface ICategoryRequestDTO {
  _id?: string;
  name: string;
  description: string;
  picture: string;
  product?: Product[];
}

interface Product {
  _id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  deliveryTime: number;
  features: string[];
  sales: number;
  rating: string[];
}

function formatCurrency(value: number): string {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
}

export const productByCategoryDTO = (data: ICategoryRequestDTO[]) => {
  return data.map((item) => {
    return {
      id: item._id,
      name: item.name,
      description: item.description,
      picture: formatAddressImage(item.picture),
      product: item?.product?.map((item2)=> {
      return {
          id: item2._id,
          userId: item2.userId,
          title: item2.title,
          description: item2.description,
          category: item2.category,
          price: formatCurrency(item2.price),
          images: formatAddressImage(item2?.images[0]),
          deliveryTime: item2.deliveryTime,
          features: item2.features,
          sales: item2.sales,
          rating: item2.rating, 
      }
     })
    }
  })
}
