export interface IListAllUsersRequestDTO {
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: any
  country: string
  phone: string
  desc: string
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
