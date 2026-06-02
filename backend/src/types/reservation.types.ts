export interface Reservation {
  id: string;
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  comensales: string;
  ocasion: string;
}

export type ReservationInput = Omit<Reservation, "id">;

export interface ReservationParams {
  id: string;
}

export interface NotFoundResponse {
  message: string;
}

export interface DeleteSuccessResponse {
  message: string;
}

export interface RouteNotFoundResponse {
  error: string;
  path: string;
}
