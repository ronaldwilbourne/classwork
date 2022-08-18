//hero.moveRight()
//A reusable block of code designed to perform a single purpose
//buildings blocks of a programme
let moveRight;
let moveLeft;
//i.e console.log()
//function declaration 
//ie it doesnt matter where you use it
function sayHello(){
    console.log('hello')
    return'hello'
}
//scope to function that has been declared on a varible cant be used outside that funtiob
//apo ndani ya brackets
//function expression 
//be careful where you use it
const sayHi = function(){
    console.log('hi')
    return'hi'
}
//arrow funtion
const sayHey = () => 'hey' 
console.log(sayHello())
console.log(sayHi())
console.log(sayHey())
