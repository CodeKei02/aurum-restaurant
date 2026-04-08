import { body, validationResult } from "express-validator";

export const reservationSchema = [
  body("nombre").trim().notEmpty().withMessage("Nombre is required"),
  body("telefono").trim().notEmpty().withMessage("Telefono is required"),
  body("fecha").notEmpty().withMessage("Fecha is required"),
  body("hora").notEmpty().withMessage("Hora is required"),
  body("ocasion").trim().notEmpty().withMessage("Ocasion is required"),
  body("comensales")
    .custom((value) => /^([1-9]|10|10\+)$/.test(String(value)))
    .withMessage("Comensales must be between 1-10 or 10+"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
