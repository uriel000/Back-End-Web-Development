const express = require('express');

const app = express();
const port = 8080;

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// HOMEPAGE
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/cats', (req,res) => {
    const cats = ["happy", "muning", "garfield", "oreo", "miming", "swswsws"];
    res.render('cats', {cats});
})

// RANDOM NUMBER GENERATOR
app.get('/rand', (req, res) => {
    const randomNum = Math.floor(Math.random() *10) +1;
    res.render('random', {randomNum});
})

// REDDIT
app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
} )

// CONTACT PAGE
app.get('/contact', (req,res) => {
    res.render('contact');
})

// ABOUT PAGE
app.get('/about', (req,res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log("Listening on port ", port);
})