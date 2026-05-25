import type { Request, Response } from "express";
import * as reservationService from "../services/reservation.service.js";
import type {
  DeleteSuccessResponse,
  NotFoundResponse,
  Reservation,
  ReservationInput,
  ReservationParams,
} from "../types/reservation.types.js";

function messageError(res: Response<NotFoundResponse>): void {
  res.status(404).json({ message: "Reservation not found" });
}

function getNextId(reservations: Reservation[]): number {
  if (reservations.length === 0) return 1;
  const last = reservations[reservations.length - 1];
  return last ? last.id + 1 : 1;
}

export async function getReservation(
  _req: Request,
  res: Response<Reservation[]>,
): Promise<void> {
  const reservations = await reservationService.getAll();
  res.json(reservations);
}

export async function getReservationById(
  req: Request<ReservationParams>,
  res: Response<Reservation | NotFoundResponse>,
): Promise<void> {
  const reservations = await reservationService.getAll();
  const found = reservations.find((r) => r.id === Number(req.params.id));

  if (!found) {
    messageError(res);
    return;
  }

  res.json(found);
}

export async function createReservation(
  req: Request<object, Reservation, ReservationInput>,
  res: Response<Reservation>,
): Promise<void> {
  const reservations = await reservationService.getAll();
  const newReservation: Reservation = {
    id: getNextId(reservations),
    ...req.body,
  };
  reservations.push(newReservation);
  await reservationService.saveAll(reservations);
  res.status(201).json(newReservation);
}

export async function updateReservation(
  req: Request<ReservationParams, Reservation, ReservationInput>,
  res: Response<Reservation | NotFoundResponse>,
): Promise<void> {
  const reservations = await reservationService.getAll();
  const index = reservations.findIndex((r) => r.id === Number(req.params.id));

  if (index === -1) {
    messageError(res);
    return;
  }

  reservations[index] = { id: Number(req.params.id), ...req.body };
  await reservationService.saveAll(reservations);
  res.status(200).json(reservations[index]);
}

export async function deleteReservation(
  req: Request<ReservationParams>,
  res: Response<DeleteSuccessResponse | NotFoundResponse>,
): Promise<void> {
  const reservations = await reservationService.getAll();
  const index = reservations.findIndex((r) => r.id === Number(req.params.id));

  if (index === -1) {
    messageError(res);
    return;
  }

  reservations.splice(index, 1);
  await reservationService.saveAll(reservations);
  res.status(200).json({ message: "Reservation deleted successfully" });
}
