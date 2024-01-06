import { Gig } from '../../entities/Gig'
import { IGigRepository } from '../IGigRepository'
import gigSchema from '../../database/schemas/schemas.gig'
import userSchema from '../../database/schemas/schemas.user'
import { ObjectId } from 'mongoose'


interface ISearchGig{
  userId: string
  category: string
  min: number
  max: number
  search: string
  sort: string
}

export class GigDBRepository implements IGigRepository {
  async createGig(dataGig: Gig): Promise<boolean> {
    const resultDB = await gigSchema.create({
      userId: dataGig.userId,
      title: dataGig.title,
      desc: dataGig.desc,
      totalStars: dataGig.totalStars,
      starNumber: dataGig.starNumber,
      category: dataGig.category,
      price: dataGig.price,
      cover: dataGig.cover,
      images: dataGig.images,
      shortTitle: dataGig.shortTitle,
      shortDesc: dataGig.shortDesc,
      deliveryTime: dataGig.deliveryTime,
      revisionNumber: dataGig.revisionNumber,
      features: dataGig.features,
      sales: dataGig.sales,
    })

    return !!resultDB
  }

  async updateGig(dataGig: Gig): Promise<boolean> {
    const resultDB = await gigSchema.updateOne(
      { _id: dataGig._id },
      {
        userId: dataGig.userId,
        title: dataGig.title,
        desc: dataGig.desc,
        totalStars: dataGig.totalStars,
        starNumber: dataGig.starNumber,
        category: dataGig.category,
        price: dataGig.price,
        cover: dataGig.cover,
        images: dataGig.images,
        shortTitle: dataGig.shortTitle,
        shortDesc: dataGig.shortDesc,
        deliveryTime: dataGig.deliveryTime,
        revisionNumber: dataGig.revisionNumber,
        features: dataGig.features,
        sales: dataGig.sales,
      }
    )

    return !!resultDB
  }

  async deleteGig(id: string): Promise<boolean> {
    const result = await gigSchema.findByIdAndDelete(id)
    return !!result
  }

  async findByIdGig(id: string): Promise<Gig> {
    const result = await gigSchema.findById(id)
    return result
  }
 
  async listAllGigs(search: ISearchGig): Promise<Gig[]> {
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
    
    const result = await gigSchema.find(filters).populate('category', 'name description').sort({ [search.sort]: -1 });
    return result
  }

  async verifyIdGigExists(id: string): Promise<boolean> {
    const result = await gigSchema.findById(id)
    return !!result
  }

  async verifyUserIsSeller(userid: string | ObjectId): Promise<boolean>{
    const result = await userSchema.findById(userid)
    return !!result
  }

}
