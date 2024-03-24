export class Message {
  public _id?: string
  public conversationId: string
  public userId: string
  public description: string
  public readBySeller?: boolean
  public readByBuyer?: boolean
  public lastMessage?: string

  constructor(props: Message) {
    Object.assign(this, props)
  }
}
