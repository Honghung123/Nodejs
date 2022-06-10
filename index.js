const express = require('express')
const app = express()
const port = 5000
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    var a= 50
    var c = 2*a
  return res.send('hello world')
})
app.listen(port,() => console.log(`listening on port at http://localhost:${port}`)) 