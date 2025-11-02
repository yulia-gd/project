import { create } from 'zustand';
import axios from 'axios';

export const useRegionsStore = create((set) => ({
  regions: [],
  selectedRegion: null,

  // Function to fetch regions from the backend
  // Function to fetch regions from the backend
fetchRegions: async () => {
  console.log('Hii from fetchRegions in regionsStore');
  try {
    console.log('Hii from fetchRegions in regionsStor2e');
    const response = await axios.get('http://localhost:3000/api/regions'); // Change URL as needed
    
    // Виводимо відповідь у консоль
    console.log('Received regions from backend:', response.data);

    // Записуємо дані у стан
    set({ regions: response.data });

  } catch (error) {
    console.error('Error fetching regions:', error);
  }
},


  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));
