export interface IRegisterRequestDTO {
  username: string
  email: string
  permissions: string[]
  hash?: string
  salt?: string
  recovery?: {
    token: string,
    date: Date
  },
  img: string,
  country: string,
  phone: string,
  desc: string,
  isSeller: boolean
}
