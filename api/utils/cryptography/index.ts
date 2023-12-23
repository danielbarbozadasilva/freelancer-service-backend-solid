import crypto = require('crypto')

class Cryptography {
  
  public createSalt (): string {
    try {
      return crypto.randomBytes(16).toString('hex')
    } catch (error) {}
  }

  public createHash (password: string, salt: string): string {
    try {
      return crypto
        .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
        .toString('hex')
    } catch (error) {}
  }

  public validatePassword (password: string, salt: string, hash: string): boolean {
    try {
      const result = crypto
        .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
        .toString('hex')
      return result === hash
    } catch (error) {}
  }
}

export default new Cryptography()
