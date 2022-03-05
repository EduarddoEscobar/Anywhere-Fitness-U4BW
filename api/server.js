//Library variables\\
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//Routers\\
const usersRouter = require('./endpoints/users/users-router')
const rolesRouter = require('./endpoints/roles/roles-router')
const classesRouter = require('./endpoints/classes/classes-router')
const authRouter = require('./endpoints/auth/auth-router')

//Global Middleware\\
const { restricted } = require('./middleware');

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', restricted, usersRouter)
server.use('/api/roles', restricted ,rolesRouter)
server.use('/api/classes', restricted ,classesRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.status(200).json('Welcome to Anywhere Fitness for all your fitness needs')
})

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server