import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Using const instead of let
const cached: MongooseCache = (global as typeof globalThis & { mongoose?: MongooseCache }).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "postgallery_db",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
