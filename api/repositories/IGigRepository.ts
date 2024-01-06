import { ObjectId } from 'mongoose'
import { Gig } from '../entities/Gig'

export interface IGigRepository {
  createGig(gig: Gig): Promise<boolean>
  updateGig(gig: Gig): Promise<boolean>
  deleteGig(gig: string): Promise<boolean>
  verifyIdGigExists(id: string | ObjectId): Promise<boolean>
  verifyUserIsSeller(userid: string | ObjectId): Promise<boolean>
  findByIdGig(id: string): Promise<Gig>
  listAllGigs(search: object): Promise<Gig[]>
}
