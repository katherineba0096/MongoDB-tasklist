const { MongoClient } = require('mongodb');
const env = require("dotenv");

env.config();

const url = process.env.MONGO_URI;


const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, });

const dbName = "test";

const connectDB = async () => {
    await client.connect();
    return client.db(dbName)
}



module.exports = connectDB;
