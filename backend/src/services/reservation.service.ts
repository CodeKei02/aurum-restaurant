import { prisma } from "../lib/prisma.js";
import type {
  Reservation,
  ReservationInput,
} from "../types/reservation.types.js";

export async function findAll(): Promise<Reservation[]> {
  return prisma.reservation.findMany({
    orderBy: [{ fecha: "asc" }, { hora: "asc" }],
  });
}

export async function findById(id: string): Promise<Reservation | null> {
  return prisma.reservation.findUnique({ where: { id } });
}

export async function create(data: ReservationInput): Promise<Reservation> {
  return prisma.reservation.create({ data });
}

export async function update(
  id: string,
  data: ReservationInput,
): Promise<Reservation | null> {
  try {
    return await prisma.reservation.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function remove(id: string): Promise<boolean> {
  try {
    await prisma.reservation.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
