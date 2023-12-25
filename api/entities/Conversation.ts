export class Conversation {
    public id?: string
    public sellerId?: string
    public buyerId?: string
    public readBySeller?: boolean
    public readByBuyer?: boolean
    public lastMessage?: string
  
    constructor(props: Conversation) {
      Object.assign(this, props)
    }
  }
  