import { Request, Response } from 'express'
import { CreateGigUseCase } from './CreateGigUseCase'

export class CreateGigController {
  constructor(private createGigUseCase: CreateGigUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.createGigUseCase.execute({
        userId: request.body.userId,
        title: request.body.title,
        desc: request.body.desc,
        totalStars: request.body.totalStars,
        starNumber: request.body.starNumber,
        category: request.body.category,
        price: request.body.price,
        cover: request.body.cover,
        images: request.file.originalname,
        shortTitle: request.body.shortTitle,
        shortDesc: request.body.shortDesc,
        deliveryTime: request.body.deliveryTime,
        revisionNumber: request.body.revisionNumber,
        features: Array.isArray(request.body.features)? request.body.features : request.body.features.split(','),
        sales: request.body.sales
       })

      return response
        .status(201)
        .send({ message: 'Gig successfully created!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
