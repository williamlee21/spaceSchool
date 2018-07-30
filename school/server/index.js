const express = require("express")
const app = express()
const {db} = require('./db')

app.get('/', (req, res) => res.send('Hello World'))

db.sync()
    .then(()=>{
        console.log('db synced')
        app.listen(3000, () => console.log("Listening on port 3000"))
    })