import { Request, Response } from 'express'
import { UpdateGigUseCase } from './UpdateGigUseCase'

export class UpdateGigController {
  constructor(private updateGigUseCase: UpdateGigUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.updateGigUseCase.execute({
        _id: request.params.id,
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
      return response.status(200).send({ message: 'Gig successfully updated!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
