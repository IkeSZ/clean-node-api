import request from 'supertest'

// App
import { app } from '../config/app'

describe('CORS Middleware', () => {
  it('should able to enable cors', async () => {
    app.get('/test-cors', (req, res) => {
      return res.send()
    })

    await request(app)
      .get('/test-cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
