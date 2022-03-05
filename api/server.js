const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

//Routers\\
const usersRouter = require('./endpoints/users/users-router')
const rolesRouter = require('./endpoints/roles/roles-router')

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/roles', rolesRouter)

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