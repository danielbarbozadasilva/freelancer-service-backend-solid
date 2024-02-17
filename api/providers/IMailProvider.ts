export interface IAddress {
  email: string
  name: string
}

export interface IData {
  addresses: IAddress[]
}

export interface IMessage {
  to: IAddress | any
  from: IAddress
  subject: string
  body: string
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>
}
