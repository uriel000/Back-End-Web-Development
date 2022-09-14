const express = require('express');

const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Welcome to Jesriel s World!');
})

app.get('/cat', (req, res) => {
  res.send("I love happy and my 3 other cats <3");
})

app.post('/cat', (req, res) => {
  res.send("Meow");
})

app.get('/dog', (req, res) => {
  res.send("I love kuroo <3");
})

app.get('*', (req,res) => {
  res.send("I do not know this path");
})

// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send("Hello this is me Jesriel HAHAHAHAHHA");
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Express Helps Us To:
// Start up a server to listen for requests
// Parse incoming requests
// Match those requests to particular routes
// Craft our HTTP response and associated content