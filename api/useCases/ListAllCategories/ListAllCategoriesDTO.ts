import { formatAddressImage } from "../../utils/utils.file"

export interface ICategoryRequestDTO {
  _id?: string
  id?: string
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
