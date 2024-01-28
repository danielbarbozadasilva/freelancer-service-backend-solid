export class Order {
  public id?: string
  public productId?: string
  public title?: string
  public price?: number
  public userId?: string
  public buyerId?: string
  public isCompleted?: boolean
  public isSeller?: boolean
  public payment_intent?: string
    
    constructor(props: Order) {
      Object.assign(this, props)
    }
  }
  