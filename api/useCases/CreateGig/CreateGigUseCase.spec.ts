import { createGigUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICreateGigRequestDTO } from './CreateGigDTO'

describe('Create Gig', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create Gig', () => {
    test('Make sure create Gig', async () => {
      const data = {
        userId: Object('65883ab3c89918015e25e532'),
        title: 'Desenvolvedor Full Stack',
        desc: 'Experiência em desenvolvimento web full stack',
        totalStars: 50,
        starNumber: 4.5,
        category: Object('6591ac5bf9877e3170d90c48'),
        price: 50,
        cover: 'files-1704052453983.jpg',
        images: ['files-1704052453983.jpg'],
        shortTitle: 'Dev Full Stack',
        shortDesc: 'Desenvolvimento web full stack',
        deliveryTime: 7,
        revisionNumber: 2,
        features: [
          'Desenvolvimento web',
          'APIs RESTful',
          'React, Node.js, Express'
        ],
        sales: 0
      }

      const result = await createGigUseCase.execute(data as ICreateGigRequestDTO)
      expect(result).toBe(true)
    })
  })
})
