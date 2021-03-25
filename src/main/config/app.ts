import express from 'express'

// Setup Middleware
import setupMiddlewares from './middlewares'

const app = express()
setupMiddlewares(app)

export { app }
