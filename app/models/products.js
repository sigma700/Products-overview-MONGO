import {client, ObjectId} from "../routes/server/db";

const uri = process.env.MONGODB_CONNECTION_STRING;

let db = client.db("Products");
let collection = db.collection("Products");
export async function getProducts() {
  let products = await collection.find().toArray();
  return products;
}

export async function getProductById(id) {
  let product = await collection.findOne({
    _id: ObjectId.createFromHexString(id),
  });
  return product;
}

export async function createProducts(product) {
  let result = await collection.insertOne(product);

  return result;
}

export async function updateProducts(id, title, price, quantity, image) {
  //getting all the individual products
  let result = await collection.updateOne(
    {
      _id: ObjectId.createFromHexString(id),
    },
    {
      $set: {
        title,
        price,
        quantity,
        image,
      },
    }
  );
  return result;
}
