import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

interface FormData {
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  comensales: string;
  ocasion: string;
}

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

const GOLD = '#C9A962';
const DARK = '#0A0A0A';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.875rem 0',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.875rem',
  color: '#FFFFFF',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid #2a2a2a',
  transition: 'border-color 0.3s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.7rem',
  fontWeight: 500,
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  color: '#848484',
  marginBottom: '0.5rem',
};

export default function ReservacionesSection() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: '',
    ocasion: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="reservaciones"
      style={{
        backgroundColor: DARK,
        padding: '7rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  width: '2rem',
                  backgroundColor: GOLD,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: GOLD,
                }}
              >
                Reservaciones
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '0.05em',
                color: '#FFFFFF',
                lineHeight: 1.2,
              }}
            >
              Reserva Tu{' '}
              <span style={{ fontStyle: 'italic', color: GOLD }}>Mesa</span>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                color: '#848484',
                lineHeight: 1.7,
                marginTop: '1.5rem',
                maxWidth: '480px',
              }}
            >
              Asegura tu lugar para una experiencia gastronómica inolvidable.
              Nuestro equipo se encargará de que cada detalle sea perfecto para
              tu ocasión especial.
            </p>

            <div
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: '#FFFFFF',
                    }}
                  >
                    Horario
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      color: '#848484',
                    }}
                  >
                    Lun - Sáb: 12:00 - 15:00 / 19:00 - 23:00
                  </p>
                </div>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: '#FFFFFF',
                    }}
                  >
                    Teléfono
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      color: '#848484',
                    }}
                  >
                    +52 (55) 1234 5678
                  </p>
                </div>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: '#FFFFFF',
                    }}
                  >
                    Dirección
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      color: '#848484',
                    }}
                  >
                    Av. Paseo de la Reforma 250, CDMX
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#141414',
              padding: '2.5rem',
              border: '1px solid #2a2a2a',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {/* Nombre */}
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = '#2a2a2a')
                  }
                />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+52 (55) 0000 0000"
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = '#2a2a2a')
                  }
                />
              </div>
              <div>
                <label style={labelStyle}>Fecha</label>
                <input
                  type="date"
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = '#2a2a2a')
                  }
                />
              </div>
              <div>
                <label style={labelStyle}>Hora</label>
                <select
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = '#2a2a2a')
                  }
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  {HORAS.map((h) => (
                    <option
                      key={h}
                      value={h}
                      style={{ backgroundColor: '#141414' }}
                    >
                      {h}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Comensales</label>
                <select
                  name="comensales"
                  value={form.comensales}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = '#2a2a2a')
                  }
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option
                      key={n}
                      value={n}
                      style={{ backgroundColor: '#141414' }}
                    >
                      {n} {n === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                  <option value="10+" style={{ backgroundColor: '#141414' }}>
                    10+ personas
                  </option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Ocasión</label>
                <select
                  name="ocasion"
                  value={form.ocasion}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = GOLD)
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = '#2a2a2a')
                  }
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  {OCASIONES.map((o) => (
                    <option
                      key={o}
                      value={o}
                      style={{ backgroundColor: '#141414' }}
                    >
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: submitted ? '#2a5a2a' : GOLD,
                color: submitted ? '#FFFFFF' : DARK,
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                if (!submitted)
                  e.currentTarget.style.backgroundColor = '#B8963A';
              }}
              onMouseLeave={(e) => {
                if (!submitted) e.currentTarget.style.backgroundColor = GOLD;
              }}
            >
              {submitted ? '✓ Reserva Confirmada' : 'Confirmar Reserva'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
