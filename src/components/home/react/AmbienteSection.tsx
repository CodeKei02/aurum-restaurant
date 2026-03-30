import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const GALLERY_IMAGES = [
  {
    src: '/images/ambiente-1.png',
    alt: 'Salón Principal',
    title: 'Salón Principal',
    description: 'Elegancia y confort',
  },
  {
    src: '/images/ambiente-3.png',
    alt: 'Bay & Lounge',
    title: 'Bay & Lounge',
    description: 'Sofisticación y ambiente',
  },
  {
    src: '/images/ambiente-4.png',
    alt: 'Terraza',
    title: 'Terraza',
    description: 'Al aire libre',
  },
  {
    src: '/images/ambiente-2.png',
    alt: 'Salón Privado',
    title: 'Salón Privado',
    description: 'Experiencia exclusiva',
  },
  {
    src: '/images/ambiente-5.png',
    alt: 'Detalle de iluminación',
    title: 'Iluminación',
    description: 'Atmósfera única',
  },
];

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === 'left' ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export default function AmbienteSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="ambiente"
      style={{
        backgroundColor: '#141414',
        padding: '7rem 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '2.5rem',
          padding: '0 3rem',
          maxWidth: '90rem',
          margin: '0 auto 2.5rem',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                display: 'block',
                height: '1px',
                width: '2rem',
                backgroundColor: '#C9A962',
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#C9A962',
              }}
            >
              Nuestro espacio
            </span>
            <span
              style={{
                display: 'block',
                height: '1px',
                width: '2rem',
                backgroundColor: '#C9A962',
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '0.03em',
              color: '#FFFFFF',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Ambiente &{' '}
            <span style={{ fontStyle: 'italic', color: '#C9A962' }}>
              Galería
            </span>
          </h2>
        </div>

        {/* Right: nav arrows */}
        <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '0.25rem' }}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Imagen anterior"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(201,169,98,0.35)',
              backgroundColor: 'transparent',
              color: '#C9A962',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A962';
              e.currentTarget.style.color = '#0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C9A962';
            }}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Imagen siguiente"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(201,169,98,0.35)',
              backgroundColor: 'transparent',
              color: '#C9A962',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A962';
              e.currentTarget.style.color = '#0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C9A962';
            }}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        slidesPerView={1.15}
        spaceBetween={16}
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 1.8, spaceBetween: 16 },
          900: { slidesPerView: 2.5, spaceBetween: 20 },
          1200: { slidesPerView: 3.2, spaceBetween: 24 },
        }}
        style={{ paddingLeft: '3rem', paddingRight: '1rem' }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    'scale(1)';
                }}
              />
              {/* Bottom gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Text overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    margin: '0 0 0.25rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {img.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.65)',
                    margin: 0,
                    letterSpacing: '0.05em',
                  }}
                >
                  {img.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
