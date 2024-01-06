import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../ICategoryRepository'
import categorySchema from '../../database/schemas/schemas.category'

export class CategoryDBRepository implements ICategoryRepository{
  async createCategory(dataCategory: Category): Promise<boolean> {
    const resultDB = await categorySchema.create({
      name: dataCategory.name,
      description: dataCategory.description,
      picture: dataCategory.picture,
    })

    return !!resultDB
  }

  async updateCategory(dataCategory: Category): Promise<boolean> {
    const resultDB = await categorySchema.updateOne(
      {_id: dataCategory._id },
      {
        name: dataCategory.name,
        description: dataCategory.description,
        picture: dataCategory.picture,
    })

    return !!resultDB
  }

  async deleteCategory(id: string): Promise<boolean> {
    const result = await categorySchema.findByIdAndDelete(id)
    return !!result
  }

  async findByIdCategory(id: string): Promise<Category> {
    const result = await categorySchema.findById(id)
    return result
  }

  async listAllCategories(): Promise<Category[]> {
    const result = await categorySchema.find({})
    return result
  }

  async verifyIdCategoryExists(id: string): Promise<boolean> {
    const result = await categorySchema.findById(id)
    return !!result
  }
}
