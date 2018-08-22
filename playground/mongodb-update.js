const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

db.collection('Todos').findAndModify(
  {_id:new ObjectID("5b7cdf69d878de3bd861c104")},
  {$set:{completed:true}},{
    returnOriginal:false}).then((result) => {
  console.log(JSON.stringify(result,undefined,2));
});
   //client.close();
});
