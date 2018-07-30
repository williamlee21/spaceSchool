const express = require("express")
const app = express()
const {db} = require('./db')
const bodyParser = require('body-parser')
// const path = require('path')

app.get('/', (req, res) => res.send('Hello World'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//   }); // Send index.html for any other requests
  
  //error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
  });

db.sync()
    .then(()=>{
        console.log('db synced')
        app.listen(3000, () => console.log("Listening on port 3000"))
    })