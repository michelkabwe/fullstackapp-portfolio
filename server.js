const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const users = require('./routes/users.js')


const PORT = process.env.PORT||8707

//dirname talar om absoluta sökmappen 
const buildFolder = path.join(__dirname,'./public' )
//./public'

//build = produktion... 

app.use ( express.json() )
app.use(express.static(buildFolder))
app.use( cors())


app.get('/', (req, res) => {
  console.log('GET /')
  res.send('Hello from server')
})

app.use('/users',users)

app.use((req, res, next) => {
  console.log(` ${req.method} 
  ${res.url} `, req.params)
  next()
})

/*app.get('api',(req, res) => {
  res.json({'users': ['user1', 'user2', 'user3', user4]})
})*/

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})