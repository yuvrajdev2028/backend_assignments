const express = require('express');

const {join} = require('path')

const app=express();

app.use(express.urlencoded({ extended: false }));

const morgan = require("morgan");
const {createWriteStream} = require("fs");
 
const logFile = join(__dirname, "blogchefNew.log");   // create the log file in the current project directory
 
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
//---------------- end ------------------------//

app.set('view engine','pug');
app.set('views','./views');

app
    .get('/register',(req,res)=>{
        res.render('register')
    })
    .post('/register',(req,res)=>{
        res.redirect('/welcome')
    })

app.get('/welcome',(req,res)=>{
    res.render('welcome')
})

app.listen(4000,(err)=>{
    if(err) console.log(err)
    else console.log("Server listening on port 4000...")
})