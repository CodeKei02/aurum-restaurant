import { useState } from 'react';
import { Button } from '@/components/shared/react/Button';
import Card from '@/components/shared/react/Card';
import menuData from '@/data/menuData.json';

const TABS = ['Entradas', 'Principales', 'Postres'] as const;
type Tab = (typeof TABS)[number];

interface Dish {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const MENU_DATA = menuData as Record<Tab, Dish[]>;

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Entradas');
  const dishes = MENU_DATA[activeTab];
  return (
    <section id="menu" className="bg-dark py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-8 bg-gold" />
            <span className="font-body text-xs text-gold uppercase tracking-[3px]">
              Gastronomía
            </span>
            <span className="block h-px w-8 bg-gold" />
          </div>

          <h2
            className="font-heading font-light text-white leading-tight tracking-[0.05em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Nuestra <span className="italic text-gold">Carta</span>
          </h2>
        </div>
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-body text-[0.8rem] font-normal uppercase tracking-[2px] px-6 py-3 border-0 border-b cursor-pointer transition-all bg-transparent ${
                activeTab === tab
                  ? 'text-white border-gold'
                  : 'text-text-secondary border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {dishes
            .map((dish) => (
              <Card
                key={dish.name}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            ))
            .slice(0, 4)}
        </div>
        <div className="text-center mt-14">
          <Button
            href="/menu"
            variant="outline"
            className="inline-block py-4 px-10"
          >
            Ver Carta Completa
          </Button>
        </div>
      </div>
    </section>
  );
}
