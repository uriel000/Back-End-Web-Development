const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid'); // uuid generator

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Data From the database
let comments = [
{
    id: uuidv4(),
    username: 'user1',
    comment: 'How is your weekend?',
    
},
{
    id: uuidv4(),
    username: 'user2',
    comment: 'I am so excited!',
},
{
    id: uuidv4(),
    username: 'user3',
    comment: 'I am currently studying',
},
{
    id: uuidv4(),
    username: 'user4',
    comment: 'I love watching A24 movies!',
},
]

// Update/Edit - Serving for update comment
app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment});
})

// Delete - To delete a comment
app.delete('/comments/:id', (req,res) => {
    const {id} = req.params;
    const foundComment = comments.find(c => c.id === id);
    comments = comments.filter(c => c.id !==id);
    res.redirect('/comments');

})

// UPDATE - To update a new comment
app.patch('/comments/:id', (req,res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

// Create/New - Serving of new comment
app.get('/comments/new', (req,res) => {
    res.render('comments/new');
})

// Create - Making a new comment
app.post('/comments', (req,res) => {
    const {username, comment} = req.body; //gets the user input from new.ejs form 
    comments.push({username, comment, id:uuidv4()}); //pushes new username, comment, & id to the comments array
    res.redirect('/comments'); //after new comment is submitted it redirects to home page or all comments page
})

// Read/Show - Specific comment
app.get('/comments/:id', (req,res) => {
    const {id} = req.params; //gets the specific id from the url
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment});
})

// Read - View all comments
app.get('/comments', (req,res) => {
    res.render('comments/index', {comments});
})


// GET request
app.get('/typeofshawarma', (req,res) => {
    res.send('Get /typeofshawarma response');
})

// POST request
app.post('/typeofshawarma', (req,res) => {
    const {type, qty} = req.body;
    if (qty > 1) {
        res.send(`Here are your ${qty} ${type} shawarmas`);
    }
    else {
        res.send(`Here is your ${qty} ${type} shawarma`);

    }
})

app.listen('3000', () => {
    console.log("On post 3000")
})
