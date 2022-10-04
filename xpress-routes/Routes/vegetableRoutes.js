//load express
const express = require('express')




//create a special router object for our royes
const router = express.Router()

//load the first vegetable
const vegetable = require(`../models/vegetable.js`)
  

router.get(`/`,(req,res) =>{
    res.send(vegetable)
    console.log(vegetable)
})

// set up show route
router.get('/:index',()=>{
    res.send(vegetable[req.param.index])
})

module.exports = router