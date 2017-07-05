import express from 'express'
import mongodb from 'mongodb'
import cors from 'cors'

const app = express()
const dbUrl = 'mongodb://localhost/reactredditclone'

app.use(cors())

const port = 8080


mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.get('/api/posts', (req, res) => {
    db.collection('posts').find({}).toArray((err, posts) => {
      res.json({ posts })
    })
  })



  app.listen(port, () => console.log(`'server listening on ${port}'`));

})
