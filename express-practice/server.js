const express = require('express');

//configure the app (app.set)

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

//create our express app
const app = express()

//define a "root" route (home page)
//pass it to two arguments: the first is
//the path "/", and the second is the
//callback, with our homies "req""res"


 
//tell our app to listen to port 3000
//for HTTP request from clients

app.listen(3000, () =>{
    console.log('listening on port 3000')

})


