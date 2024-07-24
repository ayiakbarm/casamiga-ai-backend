import * as mongoose from "mongoose";

const connectOptions: mongoose.ConnectOptions = {};
export const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, connectOptions);
    console.log("DB Connection established!");
  } catch (error) {
    console.error(error);
  }
};
