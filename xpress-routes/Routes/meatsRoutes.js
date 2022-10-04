//load express
const express = require('express')



//create a special router object for our royes
const router = express.Router()


//load our first meat
const meats = require('../models/meat.js')



//set up 'index route'
router.get(`/`,(req,res) =>{
    res.send(meats)
    console.log(meats)
})

// set up show route
router.get('/:index',()=>{
    res.send(meats[req.param.index])
})

module.exports = router
