const {ObjectID} = require('mongodb');

const {mongoose} = require('./../servers/db/mongoose.js');
const {Todo} = require('./../servers/models/todo.js');
const {User} = require('./../servers/models/User.js');

var id = '5b7d0fb383b4247b42c8cfdb';

if(!ObjectID.isValid(id)){
  consloe.log('ID not valid');
}

Todo.find({
  _id:id
}).then((todos) => {
  console.log('Todos',todos);
});

Todo.findOne({
  _id:id
}).then((todo) => {
  console.log('Todo',todo)
});

Todo.findById(id).then((todo) => {
  if(!todo){return console.log('Id not found');}
  console.log('Todo is',todo);
}).catch((e) => console.log(e));
User.findById(id).then((user) => {
  if(!user){return console.log(`No user with this id:${id}`);}
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
