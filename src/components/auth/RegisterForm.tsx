import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

export function RegisterForm() {
  const { register } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo) {
      alert('Please upload a photo!');
      return;
    }

    // Створюємо тимчасовий URL для фото
    const photoPath = URL.createObjectURL(photo);

    try {
      await register(name, email, password, photoPath);
      alert('Registration successful!');
    } catch (error) {
      alert();
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Register</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div>
        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
          Profile Photo
        </label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          className="block w-full mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600"
      >
        Register
      </button>
    </form>
  );
}
