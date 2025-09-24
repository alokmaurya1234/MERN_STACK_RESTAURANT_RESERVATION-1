import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "RESERVATIONS",
  })
  .then(() => {
    console.log("✅ CONNECTED TO DATABASE SUCCESSFULLY");
    
    app.listen(PORT, () => {
      console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`❌ DATABASE CONNECTION FAILED: ${err}`);
  });