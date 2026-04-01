import type { ChangeEvent, FormEvent } from 'react';

export interface ReservationFormData {
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  comensales: string;
  ocasion: string;
}

export interface ReservationFormProps {
  form: ReservationFormData;
  submitted: boolean;
  hours: string[];
  occasions: string[];
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
}
