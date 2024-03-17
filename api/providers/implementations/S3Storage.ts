import path from 'path'
import fs from 'fs'
import mimeTypes from 'mime-types'
import aws, { S3 } from 'aws-sdk'

class S3Storage {
  private client: S3

  constructor() {
    this.client = new aws.S3({
      region: process.env.AWS_BUCKET_REGION
    })
  }

  async saveFile(filename: string): Promise<void> {
    const originalPath = path.resolve(
      `${__dirname}/../../utils/files/image`,
      filename
    )

    const ContentType = mimeTypes.lookup(originalPath)

    if (!ContentType) {
      throw new Error('File not found')
    }

    const fileContent = await fs.promises.readFile(originalPath)

    this.client
      .putObject({
        Bucket: process.env.AWS_BUCKET,
        Key: filename,
        Body: fileContent,
        ContentType
      })
      .promise()

    await fs.promises.unlink(originalPath)
  }

  async deleteFile(filename: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: 'projeto-freelancer',
        Key: filename
      })
      .promise()
  }
}

export default S3Storage
