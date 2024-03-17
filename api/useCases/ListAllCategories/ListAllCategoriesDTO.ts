import { formatAddressImage } from '../../utils/multer'

export interface ICategoryRequestDTO {
  _id?: string
  id?: string
  name: string
  description: string
  picture: string
  product?: Product[]
}

interface Product {
  _id: string
  userId: string
  title: string
  description: string
  category: string
  price: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating: string[]
}

function formatCurrency(value: number): string {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return formattedValue
}

export const productByCategoryDTO = async (data: ICategoryRequestDTO[]): Promise<any[]> => {
  const formattedData = await Promise.all(data.map(async (item) => {
    const formattedProduct = item.product ? await Promise.all(item.product.map(async (item2) => {
      return {
        id: item2._id,
        userId: item2.userId,
        title: item2.title,
        description: item2.description,
        category: item2.category,
        price: formatCurrency(item2.price),
        images: await formatAddressImage(item2.images[0]),
        deliveryTime: item2.deliveryTime,
        features: item2.features,
        sales: item2.sales,
        rating: item2.rating
      };
    })) : [];

    let picture = await formatAddressImage(item.picture)

    return {
      id: item._id,
      name: item.name,
      description: item.description,
      picture,
      product: formattedProduct
    };
  }));

  return formattedData;
};
