// usando objeto express
const express = require('express')

// app de express
const app = express()

// puerto que vamos a escuchar
const port = 3000

// path imicial, repondera a localhost
app.get('/', (req, res) => {
    res.send('Hello world.................')
})

app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launch X')
})

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

app.get('explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// con esto iniciamos la app
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})