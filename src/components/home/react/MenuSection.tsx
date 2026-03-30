import { useState } from 'react';
import Card from '@/components/shared/react/Card';
import menuData from '@/data/menuData.json';
import { MENU_TABS, type MenuData, type MenuTab } from '@/types/menu';

const MENU_DATA = menuData as MenuData;

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuTab>('Entradas');
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
          {MENU_TABS.map((tab) => (
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
      </div>
    </section>
  );
}
