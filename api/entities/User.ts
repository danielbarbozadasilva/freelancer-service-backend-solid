import { ObjectId } from "mongoose";

export class User {
  public _id?: ObjectId;
  public name?: string
  public username?: string
  public email?: string
  public cpf?: string
  public birthDate?: string
  public picture?: string
  public country?: string
  public phone?: string
  public desc?: string
  public permissions?: string[]
  public hash?: string
  public salt?: string
  public recovery?: {
    token?: String,
    date?: Date
  }
  public isSeller?: boolean

  constructor(props: User) {
    Object.assign(this, props)
  }
}
