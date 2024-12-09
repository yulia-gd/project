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
    return get().establishments.filter(
      (establishment) => establishment.country === country
    );
  },

  filterByCity: (city) => {
    return get().establishments.filter(
      (establishment) => establishment.address.split(',')[0] === city
    );
  },
}));
