// WASO3ifAr5IymVJ8

// car-services
const { MongoClient, ServerApiVersion } = require("mongodb");
let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("car-services");
    return db;
  } catch (error) {
    console.log(error);
  }
};

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
