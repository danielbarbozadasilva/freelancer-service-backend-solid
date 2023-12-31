import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class ListAllCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute() {
    return this.categoryRepository.listAllCategories()
  }
}
