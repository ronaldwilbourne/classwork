//load express
const express = require('express');

//create a special router object for our royes
const router = express.Router();

//load our fruits data
const fruits = require("../models/fruits.js");

//set up"index" route//

router.get('/',(req,res)=>{
  //res.send(fruits)
  res.sender('Index')
})


//setup "new" route
router.get('/new',(req,res)=>{
  res.send(<form>Create fruit</form>)
})

//SET UP "CREATE" ROUTE

  router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})
 
//set up "show" route
router.get('/:index',(req,res) =>{
  //res.send(fruits[req.params.index])
})


//SET UP "EDIT" ROUTE
router.get('/:index',(req,res))

router.get("/:index/edit", (res, req) => {
  res.send("<form>edit fruit</form>");
});

//set up destroy
router.delete("/fruits/:index", (req, res) => {
  res.send("deleting a fruit at index(in DB)");
});

//set update route
router.put("/fruits/:index", (req, res) => {
  res.send("updating a fruit at index!(in DB)");
});
// set up show route
router.get("/fruits/:index", () => {
  //res.send(fruits[req.param.index])
  res.render("Show", { fruit: fruits[req.param.index] });
});

module.exports = router;
