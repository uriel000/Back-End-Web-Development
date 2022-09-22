const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const accounts = [
  {
    username: 'user1',
    password: '1user',
    balance: 5000,
    id: uuidv4()
  },
  {
    username: 'user2',
    password: '2user',
    balance: 100000,
    id: uuidv4()
  }
]
// Deposit cash
app.get('/:id/deposit', (req,res) => {
  const {id} = req.params;
  const account = accounts.find(a => a.id === id);
  res.render('banking/deposit', {account});
})
app.patch('/:id/deposit', (req,res) => {
  const {id} = req.params;
  const newBalance = req.body.balance;
  const foundBalance = accounts.find(a => a.id === id);
  foundBalance.balance = parseInt(foundBalance.balance)+parseInt(newBalance);
  res.redirect('/');
})

// Withdraw Money
app.get('/:id/withdraw', (req,res) => {
  const {id} = req.params;
  const account = accounts.find(a => a.id === id);
  res.render('banking/withdraw', {account});
})

app.patch('/:id/withdraw', (req,res) => {
  const {id} = req.params;
  const newBalance = req.body.balance;
  const foundBalance = accounts.find(a => a.id === id);
  if (newBalance > foundBalance.balance){
    res.send("Error, insufficent amount")
  }else{
    foundBalance.balance = foundBalance.balance-newBalance;
  }
  res.redirect('/');
})

// Create new account
app.get('/signup', (req,res) => {
  res.render('banking/signup');
})

app.post('/', (req,res) => {
  const {username, password} = req.body;
  accounts.push({username, password, balance:0, id:uuidv4()})
  res.redirect('/');
})


app.get('/:id', (req,res) => {
  const {id} = req.params;
  const account = accounts.find(a => a.id === id);
  res.render('banking/dash', {account});
})

app.get('/', (req,res) => {
  res.render('banking/index', {accounts});
})

app.listen(8080, () => {
    console.log("On port 3000");
})
