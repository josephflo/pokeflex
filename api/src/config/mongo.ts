import "dotenv/config";
import mongoose, { connect } from "mongoose";

export async function connecToDB() {
  try {
    mongoose.set("strictQuery", false);
    const DB_URI = <string>process.env.MONGODB_URL;
    await connect(DB_URI);
    console.log('Mongoose connected succesfully')
  } catch (error:any) {
    console.log(`Error while connecting to Database. Message: ${error.message}`)
  }
}
