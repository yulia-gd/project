import { create } from 'zustand';
import mockDishes from '../data/mockDishes.json';
import mockCountriesData from '../data/mockCountries.json';

// Поєднання даних з файлами
const countries = mockCountriesData.map((country) => ({
  ...country,
  traditionalDishes: mockDishes[country.traditionalDishes],
}));

export const useCountriesStore = create((set) => ({
  countries,
  selectedCountry: null,
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));
