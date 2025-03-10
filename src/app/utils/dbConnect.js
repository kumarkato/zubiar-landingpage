import mongoose from "mongoose";

const MONGODB_URI ="mongodb+srv://naveenkumarm:naveen25@cluster0.hhqqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false, // Ensures queries don't wait for connection
      })
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
