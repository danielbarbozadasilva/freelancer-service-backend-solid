import { Product } from '../../entities/Product'
import { IProductRepository } from '../IProductRepository'
import productschemas from '../../database/schemas/product'
import userSchema from '../../database/schemas/user'
import mongoose from 'mongoose'

interface ISearchProduct {
  userId: string
  category: string
  search: string
  order: string
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
      rating: dataProduct.rating
    })

    return !!resultDB
  }

  async updateProduct(dataProduct: Product): Promise<boolean> {
    const productDB: Product = await productschemas.findOne({
      _id: dataProduct._id
    })
        
    const resultDB = await productschemas.updateOne(
      { _id: dataProduct._id },
      {
        userId: dataProduct.userId,
        title: dataProduct.title,
        description: dataProduct.description,
        category: dataProduct.category,
        price: dataProduct.price,
        images: dataProduct.images?.length
        ? productDB?.images
            .filter((item: string) => item)
            .concat(dataProduct.images)
        : productDB.images,
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
    const result = await productschemas
      .findById(id)
      .populate('userId', '-hash -salt')
      .populate('category')

    return result ? result.toObject() : null
  }

  getSort(sortType: string): any {
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
    let matchStage: any = {
      $or: [{ title: { $regex: search.search, $options: 'i' } }]
    }
  
    if (search.category) {
      const categoryId = new mongoose.Types.ObjectId(search.category)
      matchStage = {
        ...matchStage,
        'category._id': categoryId
      }
    }
    
    if (search.userId) {      
      const userId = new mongoose.Types.ObjectId(search.userId);
      matchStage = {
        ...matchStage,
        userId: userId
      };
    }
    
    const result = await productschemas.aggregate([
      {
        $lookup: {
          from: 'categoryschemas',
          localField: 'category',
          foreignField: '_id',
          as: 'category'
        }
      },
      {
        $lookup: {
          from: 'ratingschemas',
          localField: 'rating',
          foreignField: '_id',
          as: 'rating'
        }
      },
      {
        $lookup: {
          from: 'orderschemas',
          let: { productId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: { $and: [{ $eq: ['$productId', '$$productId'] }, { $eq: ['$status', 'Finalizada'] }] }
              }
            }
          ],
          as: 'orders'
        }
      },
      {
        $lookup: {
          from: 'userschemas',
          localField: 'userId',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$rating', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
      {
        $project: {
          'user.hash': 0,
          'user.salt': 0,
        }
      },
      {
        $match: matchStage
      },
      {
        $sort: this.getSort(search.order)
      },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [
            { $skip: Number(search.offset) },
            { $limit: Number(search.limit) }
          ]
        }
      }
    ])
  
    return result
  }

  async verifyIdProductExists(id: string): Promise<boolean> {
    const result = await productschemas.findById(id)
    return !!result
  }

  async verifyUserIsSeller(userid: string): Promise<boolean> {
    const result = await userSchema.findById(userid)
    return result?.isSeller
  }
}
