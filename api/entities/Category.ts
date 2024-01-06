export class Category {
    public _id?: string;
    public name: string
    public description: string
    public picture: any
    
    constructor(props: Category) {
      Object.assign(this, props)
    }
  }
  