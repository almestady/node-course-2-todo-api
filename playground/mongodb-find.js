const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count:${count}`);
  // },(err) => {
  //   consolel.log('Unable to fetch todos',err);
  // });
  db.collection('Users').find({name:'Wael Almestady'}).toArray().then((result) =>{
  console.log(`Users with Wael almestady are `,JSON.stringify(result,undefined,2));
},(err) => {
  console.log(`Unable to find users with that name`);
});



   //client.close();
});
