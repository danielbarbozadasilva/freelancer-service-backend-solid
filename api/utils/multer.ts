import multer from 'multer'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  region: process.env.AWS_BUCKET_REGION
})

export const formatAddressImage = async (imageName: string) => {
  const getObjectParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: imageName
  }

  const command = new GetObjectCommand(getObjectParams)
  const url = await getSignedUrl(s3, command, { expiresIn: 9999 })
  return url
}

const storage = multer.diskStorage({
  destination: (req, file, callback) =>
    callback(null, `${__dirname}/../utils/files/image`),
  filename: (req, file, callback) =>
    callback(null, `${file.fieldname}-${Date.now()}.jpg`)
})

const upload = multer({ storage })

export default upload
