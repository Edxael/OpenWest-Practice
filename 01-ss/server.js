// ---[ import dependencies ]------------------------
const express = require('express')
const ejs = require('ejs')
const morgan = require('morgan')
const app = express()



// ---[ Middle Ware ]--------------------------------
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'))




// ---[ Routes ]------------------------------------
app.get('/', (req, res) => {
    res.render('pages/00-index.ejs');
});

app.get('/1', (req, res) => {
    res.render('pages/01-ayumi.ejs');
});

app.get('/2', (req, res) => {
    res.render('pages/02-madc.ejs');
});

app.get('/3', (req, res) => {
    res.render('pages/03-bpink.ejs');
});

app.get('/4', (req, res) => {
    res.render('pages/04-taey.ejs');
});



// ---[ Server Listener ]-----------------------------
app.listen(3000, function(err){
    if(err){throw err;}
    console.log('server running on 3030');
});