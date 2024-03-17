import { formatAddressImage } from "../../utils/multer"

export interface ICategoryRequestDTO {
  _id?: string
  id?: string
  name?: string
  description?: string
  picture?: string
}

export const categoryDTO = async (data: ICategoryRequestDTO): Promise<ICategoryRequestDTO> => {
  return {
    id: data._id,
    name: data.name,
    description: data.description,
    picture: await formatAddressImage(data.picture)
  }
}