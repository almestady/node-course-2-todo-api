const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//delete many
// db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
//   console.log(result);

//delete One
// db.collection('Todos')
// .deleteOne({text : "Clean the garden"}).then((result) => {
//   console.log(result);
// });

//Find one and delete
db.collection('Users').findOneAndDelete({_id:new ObjectID("5b7c308679303074ed4caac1")})
.then((result) => {
  console.log(JSON.stringify(result,undefined,2));
})
   //client.close();
});
