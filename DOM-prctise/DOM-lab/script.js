
 // <!-- select and cache the main element varible name main el-->//
  var mainEl = document.querySelector('main');{
  console.log(mainEl)
  }


  //set the background color of the mainEl;to the value stored//

  mainEl.style.backgroundColor = "var(--main-bg)"

  // set the content of mainEl to <h1>sei rocks</h1>//
  mainEl.innerHTML='<h1>SEI ROCKS</h1>'

  //add a class of flex-ctr to mainEl//
  mainEl.classList.add('flex-ctr');

//select and cache the < id="top-menu">elemnt in a varible named topMenuEl<//
let topMenuEl = document.querySelector('#top-menu')
    console.log(topMenuEl)

//set the height topMenuEl element to be 100%//
topMenuEl.style.height = '100%';
//set the backgroundColor and assign it a css variable//
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
//add a class flex-around to topMenuEl
topMenuEl.classList.add('flex-around')


//iterate over the entire menuLinks arry and for each"link" object
//create an <> element
  
//var menuLinks = [
  //{text: 'about', href: '/about'},
  //{text: 'catalog', href: '/catalog'},
  //{text: 'orders', href: '/orders'},
  //{text: 'account', href: '/account'},
//];
document.getElementById('main')

menuLinks.forEach(oders => {
  
 const anchor = document.createElement('a')
//console.log(anchor)
//on the new elemnt add href attribute with its value set to href properties of the link object//
anchor.href=oders.href
  //set the new elemnet content to have value tothe text proprety link object//
  anchor.innerText=oders.text
  //console.log(anchor)

//append the new elemnt to the topMenuEl
topMenuEl.appendChild(anchor)
console.log(anchor)
  
  
})
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const subMenuEl =document.querySelector(#sub-menu)
  const menu = document.querySelector

