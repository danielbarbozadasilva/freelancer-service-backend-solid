export class Order {
  public _id: string
  public productId: string
  public title: string
  public price: number
  public userId: string
  public buyerId: string
  public status: string
  public description: string
  public isCompleted: boolean
  public isSeller: boolean
  public payment_intent: string
  public createdAt: Date
  public updatedAt: Date

  constructor(props: Order) {
    Object.assign(this, props)
  }
}
