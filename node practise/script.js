//const fs = require('fs')


//console.log('message 1')

//fs.writeFile('./helo.txt','Hello!',() => {
    //console.log('succcesfully created a file!')
//})
//const fs = require('fs')

//console.log('message 1')

//fs.writeFile('./hello.txt', 'Hello!', () => {
  //  console.log('Successfully created file!')
//})
const random = require('./utilities/random');
  for (let i = 0; i < 10; i++) {
  	console.log( random(100, 200) );
  }




  const circle = require('./utilities/circle');
  console.log( circle.area(50) );  // 7853.98...
  console.log( circle.circumference(75) );  // 471.23...



