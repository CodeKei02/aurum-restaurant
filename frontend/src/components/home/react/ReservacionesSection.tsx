import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import ReservationForm from '@/components/shared/react/ReservationForm';
import type { ReservationFormData } from '@/types/reservaciones';

const HORAS = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
];

const OCASIONES = [
  'Cena romántica',
  'Cumpleaños',
  'Negocios',
  'Celebración',
  'Aniversario',
  'Otro',
];

export default function ReservacionesSection() {
  const [form, setForm] = useState<ReservationFormData>({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: '',
    ocasion: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const reservationData = {
      nombre: form.nombre,
      telefono: form.telefono,
      fecha: form.fecha,
      hora: form.hora,
      comensales: form.comensales,
      ocasion: form.ocasion,
    };

    const response = await fetch('http://localhost:3000/api/reservaciones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationData,
      }),
    });

    if (!response.ok) {
      console.error('Error al enviar la reserva');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reservaciones" className="bg-dark px-6 py-28">
      <div className="mx-auto max-w-[80rem]">
        <div className="grid items-start gap-16 [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-px w-8 bg-gold" />
              <span className="font-body text-xs tracking-[3px] text-gold uppercase">
                Reservaciones
              </span>
            </div>

            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light tracking-[0.05em] text-white">
              Reserva Tu <span className="italic text-gold">Mesa</span>
            </h2>

            <p className="mt-6 max-w-[480px] font-body text-[0.95rem] leading-[1.7] text-text-secondary">
              Asegura tu lugar para una experiencia gastronómica inolvidable.
              Nuestro equipo se encargará de que cada detalle sea perfecto para
              tu ocasión especial.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="font-body text-[0.85rem] text-white">Horario</p>
                  <p className="font-body text-[0.8rem] text-text-secondary">
                    Lun - Sáb: 12:00 - 15:00 / 19:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="font-body text-[0.85rem] text-white">
                    Teléfono
                  </p>
                  <p className="font-body text-[0.8rem] text-text-secondary">
                    +52 (55) 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-body text-[0.85rem] text-white">
                    Dirección
                  </p>
                  <p className="font-body text-[0.8rem] text-text-secondary">
                    Av. Paseo de la Reforma 250, CDMX
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ReservationForm
            form={form}
            submitted={submitted}
            hours={HORAS}
            occasions={OCASIONES}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}
