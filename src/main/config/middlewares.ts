import { Express } from 'express'

// Middlewares
import { bodyParser } from '../middlewares/bodyParser'

export default (app: Express): void => {
  app.use(bodyParser)
}
