import request from 'supertest'

// App
import { app } from '../config/app'

describe('Content Type Middleware', () => {
  it('should be able to return default Content Type as json', async () => {
    app.get('/test-content-type', (req, res) => {
      return res.send()
    })

    await request(app)
      .get('/test-content-type')
      .expect('content-type', /json/)
  })

  it('should be able to return xml content type when asked/forced', async () => {
    app.get('/test-content-type-xml', (req, res) => {
      res.type('xml')

      return res.send()
    })

    await request(app)
      .get('/test-content-type-xml')
      .expect('content-type', /xml/)
  })
})
