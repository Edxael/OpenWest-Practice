// ===[ Dependencies ]=========================================
const express = require('express')
const ejs = require('ejs')
const app = express()



// ===[ Middleware ]===========================================
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'))



// ===[ Routes ]===============================================
app.get('/', (req, res) => {
    res.render('pages/00-Home');
    res.send('hello world');
})

app.get('/1', (req, res) => {
    res.render('pages/01-ayumi');
})

app.get('/2', (req, res) => {
    res.render('pages/02-madc');
})

app.get('/3', (req, res) => {
    res.render('pages/03-blackp');
})

app.get('/4', (req, res) => {
    res.render('pages/04-taeyang');
})



// ===[ Server Listener ]======================================
app.listen(3000, (err) => {
    if(err){ throw err }
    console.log("Server Listeinig on port: 300 ........")
})