import { User } from '../entities/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<boolean>
  findByUsername(username: string): Promise<boolean>
  findByCpf(cpf: string): Promise<boolean>
  save(user: User): Promise<User>
  listAllUsers(): Promise<User[]>
  deleteUser(idUser: String): Promise<boolean>
  listByIdUser(idUser: String): Promise<User>
  updateProfile(idUser: String, user: User): Promise<boolean>
  updateSeller(id: string, isSeller: boolean): Promise<boolean>
}
