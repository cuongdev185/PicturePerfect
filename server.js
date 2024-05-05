const app = require('./src/app');
const express = require('express');
const PORT = process.env.SERVER_PORT || 5000

app.get('/', (req, res) =>{
    res.send('Hello World!');
})

const server = app.listen (PORT, () => {
    console.log(`Server connected in port ${PORT} `)
})

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit!`))
})