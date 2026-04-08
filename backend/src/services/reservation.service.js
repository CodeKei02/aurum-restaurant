import fs from "node:fs/promises";
import { join } from "node:path";

const DB_PATH = join(process.cwd(), "data", "reservations.json");

export const getAll = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const saveAll = async (reservations) => {
  try {
    return await fs.writeFile(DB_PATH, JSON.stringify(reservations, null, 2));
  } catch (error) {
    console.error("Error saving reservations:", error);
  }
};
