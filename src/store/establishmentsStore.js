import { create } from 'zustand';

const mockEstablishments = [
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

export const useEstablishmentsStore = create((set, get) => ({
  establishments: mockEstablishments,
  savedEstablishments: [],
  
  toggleSaved: (id) => {
    set((state) => ({
      savedEstablishments: state.savedEstablishments.includes(id)
        ? state.savedEstablishments.filter((savedId) => savedId !== id)
        : [...state.savedEstablishments, id],
    }));
  },

  filterByType: (type) => {
    return get().establishments.filter((establishment) =>
      establishment.type.includes(type)
    );
  },

  filterByCountry: (country) => {
    const establishments = get().establishments; // Access state using `get()` here
    return establishments.filter(
      (establishment) => establishment.country === country
    );
  },
}));
