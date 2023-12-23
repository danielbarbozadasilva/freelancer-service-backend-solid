export class User {
  public _id?: string
  public username?: string
  public email?: string
  public permissions?: string[]
  public hash?: string
  public salt?: string
  public recovery?: {
    token?: String,
    date?: Date
  }
  public img?: string
  public country?: string
  public phone?: string
  public desc?: string
  public isSeller?: boolean

  constructor(props: User) {
    Object.assign(this, props)
  }
}
