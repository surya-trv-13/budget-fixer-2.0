import mongoose, { Connection } from "mongoose";

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

// Function to establish a connection to MongoDB
export async function connectToMongoDB() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const {connection} = await mongoose.connect(process.env.MONGODB_URI!);
    // Cache the connection for future use
    if(connection.readyState === 1)  console.log("New mongodb connection established");
    // Log message indicating a new MongoDB connection is established
    cachedConnection = connection;
    // Return the newly established connection
    return cachedConnection;
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}