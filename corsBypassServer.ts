import console from 'console'
import fetch from 'node-fetch'
import express from 'express'
import { estateUrl, searchUrl } from './api/endpoints'
import { accessKey } from './config'

const app = express()

app.all('*', (_request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/search', async (_request, response) => {
  const url = searchUrl.replace('[key]', accessKey)

  const result = await fetch(url)

  response.send(await result.text())
})

app.get('/estate/:id', async (request, response) => {
  const url = estateUrl.replace('[key]', accessKey).replace('[id]', request.params.id)

  const result = await fetch(url)

  response.send(await result.text())
})

app.listen(8000, () => {
  console.log('Server listening at http://localhost:8000')
})
