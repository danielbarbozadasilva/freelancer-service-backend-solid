export interface IProductRequestDTO {
  _id?: string;
  userId: string;
  title: string
  description: string
  category: string
  price: number
  images: any
  deliveryTime: number
  features: string[]
}
