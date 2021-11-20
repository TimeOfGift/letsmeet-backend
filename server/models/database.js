import { connect, disconnect } from "mongoose";
import "dotenv/config";

const mongoURL = process.env.MONGO_URL;

const DB = {
  
  _connect:  connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection error", err);
    }),

  _disconnect: disconnect()
      .then(() => {
    console.log("Database disconnection successful");
  })
    .catch((err) => {
      console.error("Database disconnection error");
    })
}

export default DB;


