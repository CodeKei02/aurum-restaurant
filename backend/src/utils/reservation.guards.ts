import type { Reservation } from "../types/reservation.types.js";

const RESERVATION_KEYS: readonly (keyof Reservation)[] = [
  "id",
  "nombre",
  "telefono",
  "fecha",
  "hora",
  "comensales",
  "ocasion",
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function isReservation(value: unknown): value is Reservation {
  if (!isRecord(value)) return false;

  return RESERVATION_KEYS.every((key) => {
    const field = value[key];
    if (key === "id") return typeof field === "number" && Number.isFinite(field);
    return typeof field === "string" && field.length > 0;
  });
}

export function parseReservations(data: string): Reservation[] {
  const parsed: unknown = JSON.parse(data);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(isReservation);
}
