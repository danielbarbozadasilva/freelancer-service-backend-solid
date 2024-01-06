import { formatAddressImage } from "../../utils/utils.file"

export interface ICategoryRequestDTO {
  id?: string
  _id?: string
  name?: string
  description?: string
  picture?: string[]
}

export const categoryDTO = (data: ICategoryRequestDTO[]) => {
  return data.map((item) => {
    return {
      id: item._id,
      name: item.name,
      description: item.description,
      picture: formatAddressImage(item.picture[0])
    }
  })
}
