var express = require('express');
var router = express.Router();
var Todo = require('../modal/todo.modal')

// Create TodoList
router.post('/', function(req,res,next){
  var newTodo = new Todo()
  newTodo.todolist =  req.body.todolist;
  newTodo.save(function(err,TodoList ){
    if (err)  console.log(err);
    res.json(TodoList)
  })
})

// Read TodoList
router.get('/', function(req, res, next) {
  Todo.find(function(err, TodoList){
         if(err) console.log(err)
        res.json(TodoList)
  })
});

// Read Single TodoList
router.get('/:id', function(req, res, next){
  Todo.findById(req.params.id, function(err, TodoList){
    if (err) console.log(err);
    res.json(TodoList)
  })
})

// Update TodoList
router.put('/:id', function(req, res, next){
  var data = {
    todolist:req.body.todolist
}
  Todo.findByIdAndUpdate(req.params.id, data, function(err, TodoList){
    if (err) return next(err);
    res.json(TodoList)
  })
})

// Delete TodoList
router.delete('/:id', function(req,res,next){
  Todo.findByIdAndRemove(req.params.id, function (err, TodoList ) {
    if (err) console.log(err);
    res.json(TodoList)
   });
})
module.exports = router;
