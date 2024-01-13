import { Product } from '../../entities/Product'
import { IProductRepository } from '../IProductRepository'
import productSchema from '../../database/schemas/schemas.product'
import userSchema from '../../database/schemas/schemas.user'
import { ObjectId } from 'mongoose'

interface ISearchProduct{
  userId: string
  category: string
  min: number
  max: number
  search: string
  sort: string
}

export class ProductDBRepository implements IProductRepository {
  async createProduct(dataProduct: Product): Promise<boolean> {
    const resultDB = await productSchema.create({
      userId: dataProduct.userId,
      title: dataProduct.title,
      description: dataProduct.description,
      category: dataProduct.category,
      price: dataProduct.price,
      promotion: dataProduct.promotion,
      images: dataProduct.images,
      deliveryTime: dataProduct.deliveryTime,
      features: dataProduct.features,
      sales: dataProduct.sales,
      rating: dataProduct.rating,
    })

    return !!resultDB
  }

  async updateProduct(dataProduct: Product): Promise<boolean> {
    const resultDB = await productSchema.updateOne(
      { _id: dataProduct._id },
      {
        userId: dataProduct.userId,
        title: dataProduct.title,
        description: dataProduct.description,
        category: dataProduct.category,
        price: dataProduct.price,
        promotion: dataProduct.promotion,
        images: dataProduct.images,
        deliveryTime: dataProduct.deliveryTime,
        features: dataProduct.features,
        sales: dataProduct.sales,
        rating: dataProduct.rating,
      }
    )

    return !!resultDB
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await productSchema.findByIdAndDelete(id)
    return !!result
  }

  async findByIdProduct(id: string): Promise<Product> {
    const result = await productSchema.findById(id)
    return result
  }
 
  async listAllProducts(search: ISearchProduct): Promise<Product[]> {
    const filters = {
      ...(search.userId && { userId: search.userId }),
      ...(search.category && { category: search.category }),
      ...((search.min || search.max) && {
        price: {
          ...(search.min && { $gt: search.min }),
          ...(search.max && { $lt: search.max }),
        },
      }),
      ...(search.search && { title: { $regex: search.search, $options: 'i' } }),
    }
    
    const result = await productSchema.find(filters).populate('category', 'name description').sort({ [search.sort]: -1 });
    return result
  }

  async verifyIdProductExists(id: string): Promise<boolean> {
    const result = await productSchema.findById(id)
    return !!result
  }

  async verifyUserIsSeller(userid: string | ObjectId): Promise<any>{
    const result = await userSchema.findById(userid)
    return result?.isSeller
  }

}
