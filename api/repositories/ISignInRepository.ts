export interface ISignInRepository {
  verifyCredentials(username: string, password: string): Promise<boolean>
  authenticate(username: string): Promise<object>
}
