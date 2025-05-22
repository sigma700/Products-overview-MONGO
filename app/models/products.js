import {client, ObjectId} from "../server/db";

const uri = process.env.MONGODB_CONNECTION_STRING;

export async function getProducts() {
  let db = client.db("Products");

  let collection = db.collection("Products");

  let products = await collection.find().toArray();
  return products;
}
