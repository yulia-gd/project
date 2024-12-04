import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export function RegisterForm() {
  const { register } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('female');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!photo) {
      alert('Please upload a photo!');
      return;
    }

    if (birthYear === '') {
      alert('Please enter your birth year!');
      return;
    }

    const photoPath = URL.createObjectURL(photo);

    try {
      await register(name, email, photoPath, birthYear, gender);
      navigate('/profile');
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Register</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700">Birth Year</label>
        <input
          type="number"
          id="birthYear"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo</label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
      >
        Register
      </button>
    </form>
  );
}
