const express = require('express')
const app = express()
require('dotenv').config()


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('shivkumar.sg9')
})
app.get('/instagram', (req, res) => {
  res.send('shivkumar.sg9@gmail.com')
})
app.get('/youtube', (req, res) => {
  res.send('<h1>youtube-3000 Subscribers 6000 watch hours</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})