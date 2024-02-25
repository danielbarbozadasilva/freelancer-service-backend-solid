import { ObjectId } from "mongoose";
import { formatAddressImage } from "../../utils/utils.file"

export interface IListAllUsersRequestDTO {
  _id?: ObjectId | string;
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
    token: string,
    date: Date
  },
  isSeller: boolean
}

function formatarData(data: string): string {
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return dataFormatada;
}

export const listClientDTO = (data: IListAllUsersRequestDTO) => {
      if (data.permissions[0] !== 'admin') {
        return {
          id: data._id,
          name: data.name,
          username: data.username,
          email: data.email,
          cpf: data.cpf,
          birthDate: formatarData(data.birthDate),
          picture: formatAddressImage(data.picture),
          country: data.country,
          phone: data.phone,
          description: data.description,
          permissions: data.permissions,
          isSeller: data.isSeller,
        };
      }
};
