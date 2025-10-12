import mongoose from "mongoose";

let isConnected = false; 

export async function connectDB() {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ai_chat_app",
    });
    isConnected = true;
    console.log("✅ MongoDB Connected:", db.connection.name);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    throw new Error("MongoDB connection failed");
  }
}