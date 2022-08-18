//hero.moveRight()
//A reusable block of code designed to perform a single purpose
//buildings blocks of a programme
//let moveRight;
//let moveLeft;
//i.e console.log()
//function declaration 
//ie it doesnt matter where you use it
//function sayHello(){
   // console.log('hello')
    //return'hello'}
//scope to function that has been declared on a varible cant be used outside that funtiob
//apo ndani ya brackets
//function expression 
//be careful where you use it
//const sayHi = function(){
    //console.log('hi')
   // return'hi'
//arrow funtion
//const sayHey = () => 'hey' 
//console.log(sayHello())
//console.log(sayHi())
//console.log(sayHey())

//function computeArea(length,width){
    //return length * width 
//console.log(computeArea(2,5))

//for {let i = 0; i < 10 i++} {
   // console.log(i)

//for (let index = 10; index >=1; index--) {
  //  console.log(index)}
//for (let w = 6; w < 61;w*=3){
    //if (w % 3 === 0) 
      //  console.log(w)}
// arrays.js
//let learner ='sami 
//let learner2='chris'
//let learner3='stepher'
//arrays
//you can use amy and all(string, integers)only for javascript
//let leaners = ['sami','chris','true' ]
 //console.log(leaners)
//c
//let learners=[24,'jade',true]
 //learners[2]=4
 //learners[5]='uh-oh'

 
 //push method it will add at the end
 //learners.push('4') it will add 4 on the index and it changes the length of experession
//pop method if you want to remove at the end 
//learners.pop()
//learners.push('jade')
//learners.pop()
//shift(removes from beginnig)
// unshift adds at the beginning
//learners.unshift(233)

//let learners2=['jade','Rixio','teo']

//let everybody=[...learners,...learners2]
    //spread operator

     

//rest parameters
//function add(...numbers){
   // [4,5,6,10,100,50]  
//for(let i= 0; i< numbers.length; i++) {
    //console.log(numbers[6]) 
    /*function sumArry(arrays){
        const ourArray =[5, 6,-6, 5, 0];
        let sum = 0;

    
   return sum;
    }
    console.log(sumArry[3,4,5,1])
//add(4,5,6,10,100,50)
/*function max(q, l){
if (q>l){
    return q;
}
else 
    return l;
}
console.log(max(45,67))

//function max2(r,w,t)

let vowels=['a', 'e', 'i', 'o', 'u']
    function vowels(...letters,any,[]){
        if(letters == vowels){
            return "vowels"}
    
          else
          return "return not a vowel"
        }
        console.log(vowels)*/

    //array
/*let arr = ['kiwi', 'banana','apple']

//object literal
let cat ={//declaring the cat using lets//
    name: 'Mr. Bean',
    fur: 'grey, black, and white',
    legs: 4

}
console.log(cat.name)
console.log(cat.fur)
console.log(cat.legs)
// we cam alsO acess properties with brackets when you dont know the first part of equarion

console.log(cat['name'])
console.log(cat)

cat.breed ='calico'
console.log(cat)
cat.temperament = ['mild']
console.log(cat)
cat.temperament.push('angry')//arry meaning we can push
console.log(cat)
console.log(cat.temperament[0])
if('does my cat speak fremch???'){
    console.log('wi')
}else{
        console.log('no')
    }

for(let i = 0; i < cat.legs; i++){
    console.log('leg')
}
for (let item of arr){

}
for (let prop in cat){
    console.log(prop)
    console.log(cat[prop])
}
for (let key in cat){
    console.log('key:',key)
    console.log('value:',cat[key])
    console.log()
}*/

let car = {
    nameOfCar:['Jaguar', 'mazda'], 
    engine:['5000cc', '2500'], 
    hrspwr: 450,
    model:'f34 type',
    New:'no',
    blue :function(nameOfCar, hrspwr){
        console.log(car.hrspwr)
    }
} 

console.log(car)
let computer = {
    name: 'Hp',
    processingSpeed:['54 ghz','23 ghz'],
    price: ['658','450','1000']
}
console.log(computer)

for (let key in car) {
    console.log('key:',key)
    console.log('value:',car[key])
    console.log()
}
car.blue()







function count(str){
    let obj= {};
    for(let i=0; i < str.length; i++){

        let char=str[i];
        if(obj[char]){
         obj[char]++;

        }
        else{
            obj[char]-1;
        }
    }
}
console.log(count('Hello'))

const cat ={
    name: 'Mr. Bean',//cat.friends[1].name
    legs: 4,
    type:'Feline',
    friends:[
        {

            name: 'Geo',
            legs: 4,
            type: 'feline',
        }

        {
            name:'snake',
            legs:3,
            type:'feline',
        }
        
        {   

            name:'Rixio',
            legs:5,
            Buddies:{
              {
                name:'Arthur',
                fins:5 ,//cat.Buddies[2].friends[0].fin
                type:'fish',
              }
              {
                 name:'Hannibal',
                type:'platypus'
              }        }
            }

        }    
    }    
}
