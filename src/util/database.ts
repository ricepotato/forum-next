import { MongoClient } from "mongodb";
const uri = process.env.REACT_APP_MONGODB_URI;
const options = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(uri).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(uri).connect();
}

export { connectDB };
