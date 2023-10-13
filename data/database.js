const mongodb = require('mongodb');

const url =  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1'
const client = new mongodb.MongoClient(url);
let database;
async function initDB() {
    await client.connect();
    database = client.db('API_TODO');
  

}

function getDB() {
    if(!database){
        throw new Error('Something went wrong!')
    }

   return database;
}

module.exports = {
    initDB: initDB,
    getDB: getDB
}