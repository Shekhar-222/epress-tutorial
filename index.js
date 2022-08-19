
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
  // object.method
  // app.method

app.post('/srs', function (req, res) {
    // jsobject({key:value})
    res.json({"message":"welcome to backend tutorial"})
  })

  app.post('/friend', function (req, res) {
    res.json({"Friend Name":"Suraj"})
  })

  app.listen(3000)