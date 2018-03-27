//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5aba9e30ad58866baa68dcd7')
// }, {
//   $set: {
//     completed:true
//   }, {
//     returnOriginal: false
//
//   }).then((result)=> {
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5abaa81fad58866baa68de90')
}, {
  $set: {
    name:'Satyajit'
  },
  $inc: {
    age: 1
  }
  }, {
    returnOriginal: false

  }).then((result)=> {
    console.log(result);
});


  //db.close();
});
