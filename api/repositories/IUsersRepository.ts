import { User } from '../entities/User'
import { IListAllUsersRequestDTO } from '../useCases/ListAllUsers/ListAllUsersDTO'

export interface IUserRepository {
  findByEmail(email: string): Promise<boolean>
  findByUsername(username: string): Promise<boolean>
  findByCpf(cpf: string): Promise<boolean>
  save(user: User): Promise<boolean>
  listAllUsers(): Promise<IListAllUsersRequestDTO>
  deleteUser(idUser: String): Promise<boolean>
  updateProfile(idUser: String, user: User): Promise<boolean>
}
