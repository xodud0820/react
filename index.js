const express = require('express')
const app = express()
const port = 4000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://xodud:qwe123@cluster0.2aawl7o.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("MongoDB connected..."))
  .catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 하기시러')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})