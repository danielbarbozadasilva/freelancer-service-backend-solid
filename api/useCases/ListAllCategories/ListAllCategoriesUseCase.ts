import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class ListAllCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute() {
    return await this.categoryRepository.listAllCategories()
  }
}
