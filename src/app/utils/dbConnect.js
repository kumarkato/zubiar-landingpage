import mongoose from "mongoose";

const MONGODB_URI ="mongodb+srv://naveenkumarm:Naveenkumar%4025@cluster0.hhqqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//  "mongodb+srv://naveenkumarm:Naveenkumar%4025@cluster0.hhqqj.mongodb.net/"e

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables.");
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default dbConnect;
