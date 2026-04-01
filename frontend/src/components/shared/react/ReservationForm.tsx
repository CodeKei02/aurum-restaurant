import type { ReservationFormProps } from '@/types/reservaciones';

const FIELD_LABEL_CLASS =
  'mb-2 block font-body text-[0.7rem] font-medium tracking-[2px] text-text-secondary uppercase';

const FIELD_INPUT_CLASS =
  'w-full border-0 border-b border-border-subtle bg-transparent py-3.5 font-body text-sm text-white outline-none transition-colors duration-300 focus:border-gold';

export default function ReservationForm({
  form,
  submitted,
  hours,
  occasions,
  onChange,
  onSubmit,
  className = '',
}: ReservationFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`border border-border-subtle bg-dark-lighter p-6 sm:p-10 ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={FIELD_LABEL_CLASS}>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={onChange}
            placeholder="Tu nombre completo"
            required
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={FIELD_LABEL_CLASS}>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={onChange}
            placeholder="+52 (55) 0000 0000"
            required
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <div>
          <label className={FIELD_LABEL_CLASS}>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={onChange}
            required
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <div>
          <label className={FIELD_LABEL_CLASS}>Hora</label>
          <select
            name="hora"
            value={form.hora}
            onChange={onChange}
            required
            className={`${FIELD_INPUT_CLASS} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            {hours.map((h) => (
              <option key={h} value={h} className="text-black">
                {h}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={FIELD_LABEL_CLASS}>Comensales</label>
          <select
            name="comensales"
            value={form.comensales}
            onChange={onChange}
            required
            className={`${FIELD_INPUT_CLASS} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n} className="text-black">
                {n} {n === 1 ? 'persona' : 'personas'}
              </option>
            ))}
            <option value="10+" className="text-black">
              10+ personas
            </option>
          </select>
        </div>

        <div>
          <label className={FIELD_LABEL_CLASS}>Ocasión</label>
          <select
            name="ocasion"
            value={form.ocasion}
            onChange={onChange}
            required
            className={`${FIELD_INPUT_CLASS} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            {occasions.map((o) => (
              <option key={o} value={o} className="text-black">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className={`mt-8 w-full border-0 px-4 py-4 font-body text-xs font-semibold tracking-[2px] uppercase transition-colors duration-300 ${
          submitted
            ? 'bg-[#2a5a2a] text-white'
            : 'bg-gold text-dark hover:bg-gold-dark'
        }`}
      >
        {submitted ? '✓ Reserva Confirmada' : 'Confirmar Reserva'}
      </button>
    </form>
  );
}
