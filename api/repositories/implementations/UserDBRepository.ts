import { User } from '../../entities/User'
import { IUserRepository } from '../IUsersRepository'
import clientSchema from '../../database/schemas/schemas.user'

export class UserDBRepository implements IUserRepository {
  async save(dataUser: User): Promise<boolean> {
    const resultDB = await clientSchema.create({
      username: dataUser.username,
      email: dataUser.email,
      permissions: dataUser.permissions,
      hash: dataUser.hash,
      salt: dataUser.salt,
      img: dataUser.img,
      country: dataUser.country,
      phone: dataUser.phone,
      desc: dataUser.desc,
      isSeller: dataUser.isSeller
    })

    return !!resultDB
  }

  async findByEmail(email: string): Promise<boolean> {
    const result = await clientSchema.find({ email })
    return !!result.length
  }

  async findByUsername(username: string): Promise<boolean> {
    const result = await clientSchema.find({ username })
    return !!result.length
  }
}
