import { Product } from '../../entities/Product'
import { IProductRepository } from '../IProductRepository'
import productschemas from '../../database/schemas/schemas.product'
import userSchema from '../../database/schemas/schemas.user'
import mongoose, { ObjectId } from 'mongoose'

interface ISearchProduct{
  userId: string
  category: string
  search: string
  sort: string
  offset: number
  limit: number
}

export class ProductDBRepository implements IProductRepository {
  async createProduct(dataProduct: Product): Promise<boolean> {
    const resultDB = await productschemas.create({
      userId: dataProduct.userId,
      title: dataProduct.title,
      description: dataProduct.description,
      category: dataProduct.category,
      price: dataProduct.price,
      images: dataProduct.images,
      deliveryTime: dataProduct.deliveryTime,
      features: dataProduct.features,
      sales: dataProduct.sales,
      rating: dataProduct.rating,
    })

    return !!resultDB
  }

  async updateProduct(dataProduct: Product): Promise<boolean> {
    const resultDB = await productschemas.updateOne(
      { _id: dataProduct._id },
      {
        userId: dataProduct.userId,
        title: dataProduct.title,
        description: dataProduct.description,
        category: dataProduct.category,
        price: dataProduct.price,
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
    const result = await productschemas.findByIdAndDelete(id)
    return !!result
  }

  async findByIdProduct(id: string): Promise<Product> {
    const result = await productschemas.findById(id)
    return result
  }

  getSort(sortType: string): any{
    switch (sortType) {
      case 'alfabetica_a-z':
        return { title: 1 }
      case 'alfabetica_z-a':
        return { title: -1 }
      case 'price-crescente':
        return { price: 1 }
      case 'price-decrescente':
        return { price: -1 }
      default:
        return { title: 1 }
    }
  }

  async listAllProducts(search: ISearchProduct): Promise<Product[]> {
    const categoryId = search.category ? new mongoose.Types.ObjectId(search.category) : null;
  
    const result = await productschemas.aggregate([
      {
        $lookup: {
          from: 'categoryschemas',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $lookup: {
          from: 'ratingschemas',
          localField: 'rating',
          foreignField: '_id',
          as: 'rating',
        },
      },
      {
        $lookup: {
          from: 'userschemas',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$category' },
      { $unwind: { path: '$rating', preserveNullAndEmptyArrays: true } },
      { $unwind: '$user' },
      {
        $project: {
          'user.hash': 0,
          'user.salt': 0,
        },
      },
      {
        $match: {
          $and: [
            { $or: [{ 'title': { $regex: search.search, $options: 'i' } }] },
            { 'category._id': categoryId },
          ],
        },
      },
      {
        $sort: this.getSort(search.sort),
      },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [{ $skip: Number(search.offset) }, { $limit: Number(search.limit) }],
        },
      },
    ]);
  
    return result;
  }

  async verifyIdProductExists(id: string): Promise<boolean> {
    const result = await productschemas.findById(id)
    return !!result
  }

  async verifyUserIsSeller(userid: string | ObjectId): Promise<any>{
    const result = await userSchema.findById(userid)
    return result?.isSeller
  }

}
