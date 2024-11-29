import { create } from 'zustand';
import { Establishment } from '../types';

interface EstablishmentsState {
  establishments: Establishment[];
  savedEstablishments: string[];
  toggleSaved: (id: string) => void;
  filterByType: (type: string) => Establishment[];
  filterByCountry: (country: string) => Establishment[];
}

const mockEstablishments: Establishment[] = [
  {
    id: 'sushi-master',
    name: 'Sushi Master',
    country: 'japan',
    type: ['restaurant', 'traditional'],
    description: 'Authentic sushi experience with master chefs.',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    rating: 4.8,
    address: 'Tokyo, Japan',
  },
  {
    id: 'thai-street',
    name: 'Thai Street Kitchen',
    country: 'thailand',
    type: ['street-food', 'casual'],
    description: 'Authentic street food experience in the heart of Bangkok.',
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    rating: 4.5,
    address: 'Bangkok, Thailand',
  },
];

export const useEstablishmentsStore = create<EstablishmentsState>((set, get) => ({
  establishments: mockEstablishments,
  savedEstablishments: [],
  toggleSaved: (id: string) => {
    set((state) => ({
      savedEstablishments: state.savedEstablishments.includes(id)
        ? state.savedEstablishments.filter((savedId) => savedId !== id)
        : [...state.savedEstablishments, id],
    }));
  },
  filterByType: (type: string) => {
    return get().establishments.filter((establishment) =>
      establishment.type.includes(type)
    );
  },
  filterByCountry: (country: string) => {
    return get().establishments.filter(
      (establishment) => establishment.country === country
    );
  },
}));