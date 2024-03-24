import { formatAddressImage } from '../../utils/multer'
import { capitalizeFirstLetter } from '../../utils/format'

export interface IListAllUsersRequestDTO {
  _id?: string
  id?: string
  name: string
  username: string
  email: string
  cpf: string
  birthDate: string
  picture: string
  country: string
  phone: string
  description: string
  permissions: string[]
  hash?: string
  salt?: string
  recovery?: {
    token: string
    date: Date
  }
  isSeller: boolean
}

export const listUserDTO = async (data: IListAllUsersRequestDTO): Promise<IListAllUsersRequestDTO> => {
  if (data.permissions[0] !== 'admin') {
    return {
      id: data._id,
      name: data.name,
      username: data.username,
      email: data.email,
      cpf: data.cpf,
      birthDate: data.birthDate,
      picture: await formatAddressImage(data.picture),
      country: capitalizeFirstLetter(data.country),
      phone: data.phone,
      description: data.description,
      permissions: data.permissions,
      isSeller: data.isSeller
    }
  }
}
