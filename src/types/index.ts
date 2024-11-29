export interface User {
  id: string;
  email: string;
  name: string;
  savedEstablishments: string[];
  birthYear: number;
  gender: 'male' | 'female' | 'other';
  profilePhotoUrl: string; // URL to the profile photo
}

export interface Region {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  countries: string[];
}

export interface Country {
  id: string;
  name: string;
  region: string;
  description: string;
  imageUrl: string;
  traditionalDishes: Dish[];
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Establishment {
  id: string;
  name: string;
  country: string;
  type: string[];
  description: string;
  imageUrl: string;
  rating: number;
  address: string;
}