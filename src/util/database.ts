import { log } from "console";
import { MongoClient } from "mongodb";
const uri = process.env.REACT_APP_MONGODB_URI;
const options = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

declare global {
  var _mongo: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (uri === undefined) {
    console.warn("MONGODB_URI is not defined");
  } else {
    if (!global._mongo) {
      global._mongo = new MongoClient(uri).connect();
    }
    connectDB = global._mongo;
  }
} else {
  if (uri) {
    connectDB = new MongoClient(uri).connect();
  }
}

export { connectDB };
