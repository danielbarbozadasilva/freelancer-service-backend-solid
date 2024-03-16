export interface IGigRequestDTO {
  userId: string
  title: string
  description: string
  category: string
  price: number
  images: any
  deliveryTime: number
  features: string[]
  sales: number
  rating?: string[]
}
