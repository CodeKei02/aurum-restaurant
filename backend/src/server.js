import env from "dotenv";
import express from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservation.routes.js";

env.config();

const PORT = process.env.PORT || 3000;
const app = express();

const defaultOrigins = ["http://localhost:4321"];
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const normalizeOrigin = (value) => value.replace(/\/$/, "");
const normalizedAllowedOrigins = (
  allowedOrigins.length > 0 ? allowedOrigins : defaultOrigins
).map(normalizeOrigin);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      if (normalizedAllowedOrigins.includes(normalizeOrigin(origin))) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada", path: req.originalUrl });
  return;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/reservations`);
});
