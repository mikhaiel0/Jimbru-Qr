const express = require('express')
cookieParser = require('cookie-parser')
logger = require('morgan')
const indexRouter = require('./sendimg')
let PORT = process.env.PORT || 8456

const app = express()
app.use(logger('dev'))
app.use(cookieParser())

app.use('/', indexRouter)


app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
