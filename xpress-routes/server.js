//load express
const express = require('express') 

const fruitsRoutes = require('./routes/fruitsRoutes.js')
const meatsRoutes = require('./routes/meatsRoutes.js')
const vegetableRoutes = require('./routes/vegetableRoutes.js')




//create our express app
require('dotenv').config()
const app = express()

//port
 const PORT = 3000

 
//set up our view engine
 app.set('view engine', 'jsx')
 app.engine('jsx', require('express-react-views').createEngine)

 //middleware
 app.use(express.urlencoded({extended:false}))

 app.use('/fruits',fruitsRoutes)
 app.use('/vegetable',vegetableRoutes)
 app.use('/meats',meatsRoutes)


 

 



//tell app to listen to port 3000
app.listen(PORT, function(){
    console.log('listen to port: 3000')
})

