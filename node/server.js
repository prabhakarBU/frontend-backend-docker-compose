const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "comment":"where to go from here?"
    },
    {
      "id":"2",
      "comment":"Couldnt' be any better!"
    },
    {
      "id":"3",
      "comment":"Should've been watching Netflix more"
    }
  ])
})

app.listen(4000, () => {
  console.log('connected on port 4000')
})