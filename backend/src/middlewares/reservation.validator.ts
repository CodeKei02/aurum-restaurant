import type { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import type { ValidationChain } from "express-validator";
import type { ValidationErrorResponse } from "../types/validation.types.js";

const COMENSALES_PATTERN = /^([1-9]|10|10\+)$/;

function isComensalesValid(value: unknown): boolean {
  return COMENSALES_PATTERN.test(String(value));
}

function handleValidationErrors(
  req: Request,
  res: Response<ValidationErrorResponse>,
  next: NextFunction,
): void {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
}

const reservationValidators: ValidationChain[] = [
  body("nombre").trim().notEmpty().withMessage("Nombre is required"),
  body("telefono").trim().notEmpty().withMessage("Telefono is required"),
  body("fecha").notEmpty().withMessage("Fecha is required"),
  body("hora").notEmpty().withMessage("Hora is required"),
  body("ocasion").trim().notEmpty().withMessage("Ocasion is required"),
  body("comensales")
    .custom(isComensalesValid)
    .withMessage("Comensales must be between 1-10 or 10+"),
];

export const reservationSchema = [
  ...reservationValidators,
  handleValidationErrors,
];
