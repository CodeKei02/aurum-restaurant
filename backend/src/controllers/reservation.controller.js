import * as reservationService from "../services/reservation.service.js";

const messageError = (res) => {
  return res.status(404).json({ message: "Reservation not found" });
};

export const getReservation = async (req, res) => {
  const reservation = await reservationService.getAll();
  res.json(reservation);
};

export const getReservationById = async (req, res) => {
  const reservation = await reservationService.getAll();
  const found = reservation.find((r) => r.id === Number(req.params.id));

  if (!found) {
    messageError(res);
    return;
  }

  res.json(found);
};

export const createReservation = async (req, res) => {
  const reservation = await reservationService.getAll();
  const newReservation = {
    id: reservation.length > 0 && reservation[reservation.length - 1].id + 1,
    ...req.body,
  };
  reservation.push(newReservation);
  await reservationService.saveAll(reservation);
  res.status(201).json(newReservation);
};

export const updateReservation = async (req, res) => {
  const reservation = await reservationService.getAll();
  const index = reservation.findIndex((r) => r.id === Number(req.params.id));

  if (index === -1) {
    messageError(res);
    return;
  }

  reservation[index] = { id: Number(req.params.id), ...req.body };
  await reservationService.saveAll(reservation);
  res.status(200).json(reservation[index]);
};

export const deleteReservation = async (req, res) => {
  const reservation = await reservationService.getAll();
  const index = reservation.findIndex((r) => r.id === Number(req.params.id));

  if (index === -1) {
    messageError(res);
    return;
  }

  reservation.splice(index, 1);
  await reservationService.saveAll(reservation);
  res.status(200).json({ message: "Reservation deleted successfully" });
};
