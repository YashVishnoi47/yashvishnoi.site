import mongoose from "mongoose";

const connection = {};

export const ConnectDB = async () => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    const client = mongoose.connection.getClient();
    const dbase = mongoose.connection.db;

    return { client, dbase };
  }

  try {
    console.log("Connecting to database...");
    const db = await mongoose.connect(process.env.MONGODB_URI, {});

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database ✅");

    const client = mongoose.connection.getClient();
    const dbase = mongoose.connection.db;

    return { client, dbase };
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
