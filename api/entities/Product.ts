export class Product {
  public _id?: string
  public userId: string
  public title: string
  public description: string
  public category: string
  public price: number
  public images: string[]
  public deliveryTime: number
  public features: string[]
  public sales?: number
  public rating?: string

  constructor(props: Product) {
    Object.assign(this, props)
  }
}
