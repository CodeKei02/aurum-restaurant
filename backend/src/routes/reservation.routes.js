import { Router } from "express";
import * as reservationController from "../controllers/reservation.controller.js";
import { reservationSchema } from "../middlewares/reservation.validator.js";

const router = Router();

router
  .route("/")
  .get(reservationController.getReservation)
  .post(reservationSchema, reservationController.createReservation);

router
  .route("/:id")
  .get(reservationController.getReservationById)
  .put(reservationSchema, reservationController.updateReservation)
  .delete(reservationController.deleteReservation);

export default router;
