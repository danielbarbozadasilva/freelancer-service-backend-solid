import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, callback) =>
    callback(null, `${__dirname}/../utils/files/image`),
  filename: (req, file, callback) =>
    callback(null, `${file.fieldname}-${Date.now()}.jpg`)
})

const upload = multer({ storage })

export default upload
