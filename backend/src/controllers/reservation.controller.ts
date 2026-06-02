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

export async function getReservation(
  _req: Request,
  res: Response<Reservation[]>,
): Promise<void> {
  const reservations = await reservationService.findAll();
  res.json(reservations);
}

export async function getReservationById(
  req: Request<ReservationParams>,
  res: Response<Reservation | NotFoundResponse>,
): Promise<void> {
  const found = await reservationService.findById(req.params.id);

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
  const newReservation = await reservationService.create(req.body);
  res.status(201).json(newReservation);
}

export async function updateReservation(
  req: Request<ReservationParams, Reservation, ReservationInput>,
  res: Response<Reservation | NotFoundResponse>,
): Promise<void> {
  const updated = await reservationService.update(req.params.id, req.body);

  if (!updated) {
    messageError(res);
    return;
  }

  res.status(200).json(updated);
}

export async function deleteReservation(
  req: Request<ReservationParams>,
  res: Response<DeleteSuccessResponse | NotFoundResponse>,
): Promise<void> {
  const deleted = await reservationService.remove(req.params.id);

  if (!deleted) {
    messageError(res);
    return;
  }

  res.status(200).json({ message: "Reservation deleted successfully" });
}
