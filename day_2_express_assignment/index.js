const express = require('express');
const app = express();

app.listen(4000,(error)=>{
   if(error){
    console.error(error);
   }
   else console.log("Server started on port 4000...")
});

app.get('/',(req,res)=>{
    res.send("<h2>Welcome to my site</h2>")
})


app.get('/home',(req,res)=>{
    res.status(200).json({
        message:"response ok from home route"
    }).send("Hello from server.")
})

app.use('/cart',require('./cart'));