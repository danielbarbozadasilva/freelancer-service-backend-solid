export interface ICreateProductRequestDTO {
  userId: string
  title: string
  description: string
  category: string
  price: number
  images: any
  deliveryTime: string
  features: string[]
  sales?: number
  rating?: string
}
