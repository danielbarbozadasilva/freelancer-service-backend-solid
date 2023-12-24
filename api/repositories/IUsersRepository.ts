import { User } from '../entities/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<boolean>
  findByUsername(username: string): Promise<boolean>
  findByCpf(cpf: string): Promise<boolean>
  save(user: User): Promise<boolean>
}
