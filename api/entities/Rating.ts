export class Rating {
  public _id?: string
  public id?: string
  public name: string
  public text: string
  public score: string
  public productId: string
  public userId: string

  constructor(props: Rating) {
    Object.assign(this, props)
  }
}
