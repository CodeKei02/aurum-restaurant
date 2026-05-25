import fs from "node:fs/promises";
import { join } from "node:path";
import type { Reservation } from "../types/reservation.types.js";
import { parseReservations } from "../utils/reservation.guards.js";

const DB_PATH = join(process.cwd(), "data", "reservations.json");

export async function getAll(): Promise<Reservation[]> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return parseReservations(data);
  } catch {
    return [];
  }
}

export async function saveAll(reservations: Reservation[]): Promise<void> {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(reservations, null, 2));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error saving reservations:", message);
  }
}
