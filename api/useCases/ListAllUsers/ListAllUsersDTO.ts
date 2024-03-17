import { formatAddressImage } from '../../utils/multer'

export interface IListAllUsersRequestDTO {
  _id?: string
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

function formatarData(data: string): string {
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return dataFormatada
}

export const listUserDTO = async (data: IListAllUsersRequestDTO[]): Promise<IListAllUsersRequestDTO[]> => {
  const formattedData = await Promise.all(data.map(async (item) => {
      if (item.permissions[0] !== 'admin') {
        return {
          id: item._id,
          name: item.name,
          username: item.username,
          email: item.email,
          cpf: item.cpf,
          birthDate: formatarData(item.birthDate),
          picture: await formatAddressImage(item.picture),
          country: item.country,
          phone: item.phone,
          description: item.description,
          permissions: item.permissions,
          isSeller: item.isSeller
        }
      }
      return null
    })
  )

  return formattedData.filter((item) => item !== null)
}
