const express = require('express')
const port = 3000

//create the app
const app = express()

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]

//define routes(when ready)
app.get('/:index' , (req,res) => {
    if(plants[req.params.index]) {

    }else{
        res.send('cannot find anything at index' + req.params.index)

    }
})
//example with multiple params
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)
})
//listen to port
app.listen (port, () =>{
    console.log('listening to port', port)
})

