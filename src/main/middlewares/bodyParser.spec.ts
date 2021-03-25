import request from 'supertest'

// App
import { app } from '../config/app'

describe('Body Parser Middleware', () => {
  it('should be able to parser body as json', async () => {
    app.post('/test-body-parser', (req, res) => {
      return res.send(req.body)
    })

    await request(app)
      .post('/test-body-parser')
      .send({ name: 'Ednaldo Pereira' })
      .expect({ name: 'Ednaldo Pereira' })
  })
})
