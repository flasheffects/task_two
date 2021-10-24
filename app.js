const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
    res.sendStatus(200)
})

app.post('/api/users', (req, res) => {
    res.sendStatus(201)
})

app.put('/api/users', (req, res) => {
    res.sendStatus(200)
})

app.put('/api/users', (req, res) => {
    res.sendStatus(204)
})

module.exports = app