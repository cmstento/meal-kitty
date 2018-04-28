var express = require('express')
var storeRouter = require('./controllers/store_controller.js')
var cors = require('cors')

app = express()

app.use(cors({ origin: '*' }))
app.use('/stores', storeRouter)

app.listen(8080)