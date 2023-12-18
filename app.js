const express = require('express')
const app = express()
require('dotenv').config()
// routers
const tasks = require('./routes/task')

// databaseConnection
const connectDB = require('./db/connection')

// sever address
const port = 3000

// middleWare
app.use(express.json())
app.use('/', express.static('public'))
app.use('/api/v1/task', tasks)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
