import { formatAddressImage } from "../../utils/file"

export interface ICategoryRequestDTO {
  _id?: string
  id?: string
  name?: string
  description?: string
  picture?: string[]
}

export const categoryDTO = (data: ICategoryRequestDTO) => {
  return {
    id: data._id,
    name: data.name,
    description: data.description,
    picture: formatAddressImage(data.picture[0])
  }
}