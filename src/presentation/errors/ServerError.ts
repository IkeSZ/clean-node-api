class ServerError extends Error {
  constructor () {
    super('An unexpected error has been occurred.. Please try again later.')
    this.name = 'ServerError'
  }
}

export { ServerError }
