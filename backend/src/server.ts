import env from "dotenv";
import express from "express";
import cors from "cors";
import type { CorsOptions } from "cors";
import type { Request, Response } from "express";
import reservationRoutes from "./routes/reservation.routes.js";
import type { RouteNotFoundResponse } from "./types/reservation.types.js";

env.config();

const PORT = Number(process.env.PORT) || 3000;
const app = express();

const defaultOrigins = ["http://localhost:4321"];
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const normalizeOrigin = (value: string): string => value.replace(/\/$/, "");
const normalizedAllowedOrigins = (
  allowedOrigins.length > 0 ? allowedOrigins : defaultOrigins
).map(normalizeOrigin);

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (normalizedAllowedOrigins.includes(normalizeOrigin(origin))) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/reservations", reservationRoutes);

app.use((req: Request, res: Response<RouteNotFoundResponse>) => {
  res.status(404).json({ error: "Ruta no encontrada", path: req.originalUrl });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/reservations`);
});
