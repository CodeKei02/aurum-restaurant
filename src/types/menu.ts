export const MENU_TABS = ['Entradas', 'Principales', 'Postres'] as const;

export type MenuTab = (typeof MENU_TABS)[number];

export interface Dish {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export type MenuData = Record<MenuTab, Dish[]>;
