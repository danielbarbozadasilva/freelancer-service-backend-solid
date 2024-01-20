export interface IUpdateProfileRequestDTO {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: any
  country: string
  phone: string
  description: string
  permissions: string[]
  hash?: string
  salt?: string
  recovery?: {
    token: string,
    date: Date
  },
  isSeller?: boolean
  files?: {}
}
