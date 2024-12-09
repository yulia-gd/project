import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'https://project-npq0.onrender.com/api'; // Замініть на URL вашого бекенду

export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token') || null,
  errorMessage: null,

  // Логування користувача
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;

      set({ user, isAuthenticated: true, token, errorMessage: null });
    } catch (error) {
      const message = error.response?.data?.message || 'Неправильний логін або пароль';
      set({ errorMessage: message });
      console.error('Login error:', message);
    }
  },

  // Реєстрація користувача
  register: async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;

      set({ user, isAuthenticated: true, token, errorMessage: null });
    } catch (error) {
      const message = error.response?.data?.message || 'Помилка при реєстрації';
      set({ errorMessage: message });
      console.error('Registration error:', message);
    }
  },

  // Вихід користувача
  logout: () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    set({ user: null, isAuthenticated: false, token: null, errorMessage: null });
  },

  // Отримання даних користувача
  fetchUser: async () => {
    try {
      const { token } = get();
      if (!token) return;

      const response = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: token },
      });

      set({ user: response.data, isAuthenticated: true, errorMessage: null });
    } catch (error) {
      const message = error.response?.data?.message || 'Помилка при отриманні даних користувача';
      set({ errorMessage: message });
      console.error('Fetch user error:', message);
      get().logout();
    }
  },

  // Оновлення даних користувача
  updateUser: async (updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/user/update`, updatedData, {
        headers: { Authorization: get().token },
      });

      set({ user: response.data, errorMessage: null });
    } catch (error) {
      const message = error.response?.data?.message || 'Помилка при оновленні даних';
      set({ errorMessage: message });
      console.error('Update user error:', message);
    }
  },

  // Збереження закладу для користувача
  saveEstablishment: async (establishmentId) => {
    try {
      const response = await axios.post(
        `${API_URL}/user/save-establishment`,
        { establishmentId },
        {
          headers: { Authorization: get().token },
        }
      );

      set((state) => ({
        user: {
          ...state.user,
          savedEstablishments: response.data.savedEstablishments,
        },
        errorMessage: null,
      }));
    } catch (error) {
      const message = error.response?.data?.message || 'Помилка при збереженні закладу';
      set({ errorMessage: message });
      console.error('Save establishment error:', message);
    }
  },
}));
