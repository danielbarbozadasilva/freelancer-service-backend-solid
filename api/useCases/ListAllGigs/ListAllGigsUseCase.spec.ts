import { listAllGigsUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IGigRequestDTO } from './ListAllGigsDTO'

describe('List All gigs', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List All gigs', () => {
    test('Make sure list all gigs', async () => {
      const result: IGigRequestDTO[] = await listAllGigsUseCase.execute()
      expect(result[0]._id).not.toBe(null);
    })
  })
})
