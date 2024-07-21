require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
console.log(process.env.PORT)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('Twitter API endpoint')
})

app.get('/login', (req,res) => {
    res.send('<h1>You are on login Page</h1>')
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})