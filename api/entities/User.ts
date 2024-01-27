import { ObjectId } from "mongoose";

export class User {
  public _id?: ObjectId | string;
  public name: string
  public username: string
  public email: string
  public cpf: string
  public birthDate: string
  public picture: string[]
  public country: string
  public phone: string
  public description: string
  public permissions: string[]
  public hash?: string
  public salt?: string
  public recovery?: {
    token: string,
    date: Date
  }
  public isSeller: boolean
  public password?: string

  constructor(props: User) {
    Object.assign(this, props)
  }
}
