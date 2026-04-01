import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { ChevronDirection, GalleryImage } from '@/types/ambiente';
import 'swiper/css';

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/ambiente-salon-principal.png',
    alt: 'Salón Principal',
    title: 'Salón Principal',
    description: 'Elegancia y confort',
  },
  {
    src: '/images/ambiente-bar-y-lounge.png',
    alt: 'Bay & Lounge',
    title: 'Bay & Lounge',
    description: 'Sofisticación y ambiente',
  },
  {
    src: '/images/ambiente-aire-libre.png',
    alt: 'Terraza',
    title: 'Terraza',
    description: 'Al aire libre',
  },
  {
    src: '/images/ambiente-salon-privado.png',
    alt: 'Salón Privado',
    title: 'Salón Privado',
    description: 'Experiencia exclusiva',
  },
];

function ChevronIcon({ direction }: { direction: ChevronDirection }) {
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
    <section id="ambiente" className="overflow-hidden bg-dark-lighter py-28">
      <div className="mx-auto mb-10 flex max-w-[90rem] items-end justify-between px-6 md:px-12">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="block h-px w-8 bg-gold" />
            <span className="font-body text-[0.7rem] tracking-[3px] text-gold uppercase">
              Nuestro espacio
            </span>
            <span className="block h-px w-8 bg-gold" />
          </div>
          <h2 className="m-0 font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] font-light tracking-[0.03em] text-white">
            Ambiente & <span className="italic text-gold">Galería</span>
          </h2>
        </div>

        <div className="flex gap-2 pb-1">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Imagen anterior"
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-[rgba(201,169,98,0.35)] bg-transparent text-gold transition-colors duration-300 hover:bg-gold hover:text-dark"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Imagen siguiente"
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-[rgba(201,169,98,0.35)] bg-transparent text-gold transition-colors duration-300 hover:bg-gold hover:text-dark"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div className="pl-6 pr-4 md:pl-12 md:pr-6">
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
        >
          {GALLERY_IMAGES.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.15)_45%,transparent_70%)]" />
                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <p className="mb-1 font-heading text-xl font-semibold tracking-[0.02em] text-white">
                    {img.title}
                  </p>
                  <p className="m-0 font-body text-xs tracking-[0.05em] text-white/65">
                    {img.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
