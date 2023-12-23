import { name, version } from '../package.json'
import { app } from './app'

const port = process.env.PORT || 3001

app.listen(port, () =>
  console.log(
    `<<< ${name} v${version} was started in 'DEV' environment on port ${port}>>>`
  )
)
