import { aj } from "@/config/arcjet";
import { NextResponse } from "next/server";
import connectDB from "@/Db/MonoDb";
import mongoose from "mongoose";

export async function GET(req) {
  const userId = "user123"; // Replace with your authenticated user ID
  const decision = await aj.protect(req, { userId, requested: 5 }); // Deduct 5 tokens from the bucket
  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 }
    );
  }

  try {
    // ✅ Connect to MongoDB
    await connectDB();

    // ✅ Test database connection by listing collections
    const collections = await mongoose.connection.db.listCollections().toArray();

    return NextResponse.json({
      message: "MongoDB Connected + Arcjet Active 🚀",
      db: mongoose.connection.name,
      collections: collections.map((c) => c.name),
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      { error: "Failed to connect to MongoDB", details: error.message },
      { status: 500 }
    );
  }
}
