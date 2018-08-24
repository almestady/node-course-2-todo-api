const {ObjectID} = require('mongodb');

const {mongoose} = require('./../servers/db/mongoose.js');
const {Todo} = require('./../servers/models/todo.js');
const {User} = require('./../servers/models/User.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndDelete({_id:'5b7f91e8d878de3bd86248e9'}).then((todo) => {
  console.log(todo);
});
// Todo.findByIdAndDelete('5b7f905bd878de3bd862478b').then((todo) =>{
// console.log(todo);
// });
