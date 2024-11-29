import { create } from 'zustand';
import { Country, Dish } from '../types';

interface CountriesState {
  countries: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country | null) => void;
}

const mockDishes: Record<string, Dish[]> = {
  japan: [
    {
      id: 'sushi',
      name: 'Sushi',
      description: 'Fresh fish and rice wrapped in nori, a Japanese culinary art.',
      imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    },
    {
      id: 'ramen',
      name: 'Ramen',
      description: 'Noodle soup with various toppings and rich broth.',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
    },
  ],
  thailand: [
    {
      id: 'pad-thai',
      name: 'Pad Thai',
      description: 'Stir-fried rice noodles with eggs, tofu, and shrimp.',
      imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    },
    {
      id: 'tom-yum',
      name: 'Tom Yum Goong',
      description: 'Spicy and sour soup with shrimp and mushrooms.',
      imageUrl: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853',
    },
  ],
};

const mockCountries: Country[] = [
  {
    id: 'japan',
    name: 'Japan',
    region: 'asia',
    description: 'Japanese cuisine is known for its emphasis on seasonality, quality ingredients, and meticulous preparation methods.',
    imageUrl: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    traditionalDishes: mockDishes.japan,
  },
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'asia',
    description: 'Thai cuisine balances sweet, sour, salty, and spicy flavors, creating vibrant and aromatic dishes.',
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    traditionalDishes: mockDishes.thailand,
  },
];

export const useCountriesStore = create<CountriesState>((set) => ({
  countries: mockCountries,
  selectedCountry: null,
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));