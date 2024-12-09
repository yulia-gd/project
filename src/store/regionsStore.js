import { create } from 'zustand';
import mockRegions from '../data/mockRegions.json';

export const useRegionsStore = create((set) => ({
  regions: mockRegions,
  selectedRegion: null,
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));
