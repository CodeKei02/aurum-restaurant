import type { ValidationError } from "express-validator";

export interface ValidationErrorResponse {
  errors: ValidationError[];
}
