import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Using const instead of let
const cached: MongooseCache = (
  global as typeof globalThis & { mongoose?: MongooseCache }
).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Using existing database connection");
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  try {
    if (!cached.promise) {
      console.log("Creating new database connection");
      cached.promise = mongoose.connect(MONGODB_URI, {
        dbName: "postgallery_db",
        bufferCommands: false,
      });
    }

    cached.conn = await cached.promise;
    console.log("Database connection established");
    return cached.conn;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Failed to connect to database");
  }
};
