const express = require('express');

const app = express();
const port = 8080;
const redditData = require('./data.json');
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views'));


// HOMEPAGE
app.get('/', (req, res) => {
    res.render('home')
})

// CAT NAMES
app.get('/cats', (req, res) => {
    const cats = ["happy", "muning", "garfield", "oreo", "miming", "swswsws"];
    res.render('cats', {cats});
})

// RANDOM NUMBER GENERATOR
app.get('/rand', (req, res) => {
    const randomNum = Math.floor(Math.random() *10) +1;
    res.render('random', {randomNum});
})

// REDDIT
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', {...data});
    }else {
        res.render('notfound');
    }
} )

app.get('*', (req, res) => {
    res.render('notfound');
})

app.listen(port, () => {
    console.log("Listening on port ", port);
})