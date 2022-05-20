const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost/monsterAPI')
const Monster = require('./models/monsterModel')
const monsterRouter = require('./routes/monsterRouter')(Monster)

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())


app.set('json spaces', 2)


app.use('/api', monsterRouter)

app.get('/', (req, res) => {
    res.send('monster API going hard')
})

app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)}`)
})


