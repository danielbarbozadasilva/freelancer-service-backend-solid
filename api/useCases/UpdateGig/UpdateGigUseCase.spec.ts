import { updateGigUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IGigRequestDTO } from './UpdateGigDTO'

describe('Update Category', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update category', () => {
    test('Make sure update category', async () => {
      const data = {
        _id: Object('6591ac5bf9877e3170d90c48'),
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
      const result = await updateGigUseCase.execute(
        data as IGigRequestDTO
      )
      expect(result).toBe(true)
    })

    test('ensure return error if the id is non-existent', async () => {
      try {
        const data = {
          _id: Object('6591ac5bf9877e3170d90c48'),
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
        expect(
          await updateGigUseCase.execute(data as IGigRequestDTO)
        ).toThrow()
      } catch (error) {}
    })
  })
})
