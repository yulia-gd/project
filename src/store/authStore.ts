import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, photoPath: string, birthYear: number, gender: 'male' | 'female' ) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const mockPhotoPath = '/path/to/local/photo.jpg'; // Шлях до фото на локальному комп'ютері
      const mockUser: User = {
        id: '1',
        email,
        name: 'Yulia Huda',
        savedEstablishments: [],
        birthYear: 1990,
        gender: 'female',
        profilePhotoUrl: mockPhotoPath, // Локальний шлях
      };

      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Failed to login. Please check your credentials.');
    }
  },

  register: async (name: string, email: string, photoPath: string, birthYear: number, gender: 'male' | 'female' ) => {
    try {
      const mockUser: User = {
        id: '2',
        email,
        name,
        savedEstablishments: [],
        birthYear,
        gender,
        profilePhotoUrl: photoPath, // Локальний шлях до фото
      };
  
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Failed to register. Please try again.');
    }
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
