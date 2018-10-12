const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let db = []

app.get('/', (req, res) => res.json(db))

app.post('/:id', (req, res) => {
  /*console.log(req.body, typeof req.params.id)
  db.map((piece, key) => {
    if (key === parseInt(req.params.id)) {
      piece = req.body
    }
  })*/
   for (var i = 0; i < db.length; i++) {
     if(i === parseInt(req.params.id))
       db[i] = req.body
   }
  res.json(db)
})

app.put('/', (req, res) => {
  db.push(req.body)
  res.json(db)
})

app.delete('/:id', (req, res) => {
  db = db.filter((_, key) => key !== parseInt(req.params.id))
  // deleteById(db,req.params.id)
  res.json(db)
})

let deleteById = (array,element) => {
  const index = array.indexOf(element)
  array.splice(index, 1)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
