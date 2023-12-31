import { Category } from '../entities/Category'

export interface ICategoryRepository {
  createCategory(category: Category): Promise<boolean>
  updateCategory(category: Category): Promise<boolean>
  deleteCategory(id: string): Promise<boolean>
  verifyIdCategoryExists(id: string): Promise<boolean>
  findByIdCategory(id: string): Promise<Category>
  listAllCategories(): Promise<Category>
}
