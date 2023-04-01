const mongodb = require("mongodb");

let database;

async function connectToDatabase() {
  const client = await mongodb.MongoClient.connect();
  database = client.db("file-demo");
}

function getDb() {
  if (!database) {
    throw { message: "데이터베이스에 연결해 주세요!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
}