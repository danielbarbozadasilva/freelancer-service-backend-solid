import { Request } from 'express'
import cryptography from '../cryptography/index'

const authorizationMiddleware = (request: Request, rule: string) => {
  const { token } = request.headers as { token: string }  
  const { permissions } = cryptography.decodeToken(token)
  cryptography.checkPermissionService(permissions, rule)
}

export default authorizationMiddleware
