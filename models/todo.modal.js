var mongoose = require('mongoose')
var todo = new mongoose.Schema({
    todolist:{ type:String, required:true}
  });
 module.exports = mongoose.model('todolist', todo);