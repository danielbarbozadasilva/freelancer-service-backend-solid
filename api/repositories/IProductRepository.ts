import { Product } from '../entities/Product'

export interface IProductRepository {
  createProduct(product: Product): Promise<boolean>
  updateProduct(product: Product): Promise<boolean>
  deleteProduct(product: string): Promise<boolean>
  verifyIdProductExists(id: string): Promise<boolean>
  verifyUserIsSeller(userid: string): Promise<boolean>
  findByIdProduct(id: string): Promise<Product>
  listAllProducts(search: object): Promise<Product[]>
}
