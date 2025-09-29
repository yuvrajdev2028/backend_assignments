let express = require('express');

let router =  express.Router();

router.get('/login',(req,res)=>{
    res.send('On the login')
})

router.get('/cartList',(req,res)=>{
    res.send('On the cart list')
})

module.exports=router