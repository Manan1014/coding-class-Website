const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;
const path = require("path");
app.use('/static', express.static('static')) 
app.use(express.urlencoded())

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get('/service.pug', (req, res)=>{
    const params = { }
    res.status(200).render('service.pug', params);
})
app.get('/batch.pug', (req, res)=>{
    const params = { }
    res.status(200).render('batch.pug', params);
})
app.get('/contact.pug', (req, res)=>{
  
    res.status(200).render('contact.pug');
})
app.get('/aboutus.pug',(req,res)=>{
    const params = { }
    res.status(200).render("aboutus.pug",params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});