export interface ISignInRepository {
  verifyCredentials(email: string, password: string): Promise<boolean>
  authenticate(email: string): Promise<object>
}
