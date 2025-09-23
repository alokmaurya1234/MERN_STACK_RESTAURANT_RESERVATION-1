import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config();

// ✅ Allowed origins from .env
const allowedOrigins = [
  process.env.FRONTEND_URL, // Vercel frontend
  process.env.LOCAL_URL,    // local dev
];

// ✅ CORS middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman, curl, etc.

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("❌ CORS blocked:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Handle preflight requests explicitly
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Debugging route
app.get("/test-cors", (req, res) => {
  res.json({ success: true, origin: req.headers.origin || "none" });
});

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Database connection
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
