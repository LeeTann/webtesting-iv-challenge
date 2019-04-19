const express = require('express')

const server = express()
const db = require('../data/dbConfig')

server.use(express.json())


server.get('/', (req, res) => {
    res.status(200).json({api: 'All Good'})
})

server.get('/videogames', async (req, res) => {
    const games = await db('videogames')

    res.status(200).json(games)
})

server.post('/videogames', async (req, res) => {
    const newGame = req.body
    const result = await db('videogames').insert(newGame)

    res.status(201).json(result)
})

server.delete('/videogames/:id', async (req, res) => {
    const {id} = req.params
    const result = await db('videogames').where({id}).delete()

    res.status(200).json(result)
})


module.exports = server