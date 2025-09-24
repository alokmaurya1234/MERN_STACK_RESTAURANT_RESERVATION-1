import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ CONNECTED TO DATABASE SUCCESSFULLY");
    
    // Start the server ONLY after the database connection is successful
    app.listen(PORT, () => {
      console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`❌ DATABASE CONNECTION FAILED: ${err}`);
  });