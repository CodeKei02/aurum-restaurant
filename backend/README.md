# Aurum Restaurant Backend API

Express-based REST API for managing restaurant reservations.

## Tech Stack

- Node.js
- Express
- express-validator
- CORS
- dotenv
- nodemon (development)

## Project Structure

```text
backend/
	data/
		menuData.json
		reservations.json
	src/
		controllers/
		middlewares/
		routes/
		services/
		server.js
```

## Requirements

- Node.js 18+
- pnpm

## Installation

```bash
pnpm install
```

## Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=3000
```

If `PORT` is not set, the server defaults to `3000`.

## Run the Server

Development (with auto-reload):

```bash
pnpm run dev
```

Production:

```bash
pnpm start
```

Base URL:

```text
http://localhost:3000/api/reservations
```

## CORS

Allowed origin:

- `http://localhost:4321`

Allowed methods:

- `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`

## API Endpoints

### Get all reservations

- Method: `GET`
- Endpoint: `/api/reservations`

### Get reservation by ID

- Method: `GET`
- Endpoint: `/api/reservations/:id`

### Create a reservation

- Method: `POST`
- Endpoint: `/api/reservations`
- Body: JSON with fields in form `nombre`, `telefono`, `fecha`, `hora`, `ocasion`, `comensales`

### Update a reservation

- Method: `PUT`
- Endpoint: `/api/reservations/:id`
- Body (JSON):

```json
{
  "nombre": "Keilin Escobar",
  "telefono": "+1 555 123 4567",
  "fecha": "2026-04-10",
  "hora": "20:00",
  "ocasion": "Birthday",
  "comensales": "4"
}
```

### Delete a reservation

- Method: `DELETE`
- Endpoint: `/api/reservations/:id`

## Validation Rules

For `POST` and `PUT`:

- `nombre`: required, non-empty string
- `telefono`: required, non-empty string
- `fecha`: required
- `hora`: required
- `ocasion`: required, non-empty string
- `comensales`: must be `1` to `10` or `10+`

Validation errors return HTTP `400` with an `errors` array.

## Error Responses

- `404` when a reservation does not exist
- `404` for unknown routes
- `400` for validation errors

## Notes

- Reservation data is persisted in local JSON files.
- Current request field names are in Spanish (`nombre`, `telefono`, `fecha`, `hora`, `ocasion`, `comensales`) to match the existing backend implementation.
