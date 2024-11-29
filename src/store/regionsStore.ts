import { create } from 'zustand';
import { Region } from '../types';

interface RegionsState {
  regions: Region[];
  selectedRegion: Region | null;
  setSelectedRegion: (region: Region | null) => void;
}

const mockRegions: Region[] = [
  {
    id: 'asia',
    name: 'Asia',
    description: 'Discover the rich and diverse culinary traditions of Asia, from the spicy street food of Thailand to the delicate sushi of Japan.',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    countries: ['Japan', 'Thailand', 'Vietnam', 'China', 'India'],
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Experience the sophisticated flavors of European cuisine, from Italian pasta to French pastries.',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    countries: ['Italy', 'France', 'Spain', 'Greece', 'Germany'],
  },
  {
    id: 'americas',
    name: 'The Americas',
    description: 'From North to South, explore the diverse tastes of the Americas, including Mexican tacos and Brazilian barbecue.',
    imageUrl: 'https://images.unsplash.com/photo-1464500542410-1396074bf230',
    countries: ['Mexico', 'Brazil', 'Peru', 'USA', 'Argentina'],
  },
];

export const useRegionsStore = create<RegionsState>((set) => ({
  regions: mockRegions,
  selectedRegion: null,
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));