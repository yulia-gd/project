import { create } from 'zustand';
import axios from 'axios';

export const useEstablishmentsStore = create((set, get) => ({
  establishments: [],
  savedEstablishments: [],

  // Функція для завантаження закладів з бекенду
  fetchEstablishments: async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/establishments');
      console.log('Fetched establishments:', response.data);
      set({ establishments: response.data });
    } catch (error) {
      console.error('Error fetching establishments:', error);
    }
  },

  toggleSaved: (id) => {
    set((state) => ({
      savedEstablishments: state.savedEstablishments.includes(id)
        ? state.savedEstablishments.filter((savedId) => savedId !== id)
        : [...state.savedEstablishments, id],
    }));
  },

  filterByType: (type) => {
     console.log("All establishments:", allEstablishments);
  console.log("Filtering establishments by country:", type);
    return get().establishments.filter((establishment) =>
      establishment.type.includes(type.toLowerCase() )
    );
  },

filterByCountry: (country) => {
  const allEstablishments = get().establishments;
  console.log("All establishments:", allEstablishments);
  console.log("Filtering establishments by country:", country);

  return allEstablishments.filter(
    (establishment) =>
      establishment.country.toLowerCase() === country.toLowerCase()
  );
},


  filterByCity: (city) => {

    return get().establishments.filter(
      (establishment) => establishment.address.split(',')[0] === city
    );
  },
}));
