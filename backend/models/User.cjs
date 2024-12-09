const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Унікальний ідентифікатор користувача
  email: { type: String, required: true, unique: true }, // Email користувача
  name: { type: String, required: true }, // Ім'я користувача
  savedEstablishments: { type: [String], default: [] }, // Збережені заклади, список ідентифікаторів
  birthYear: { type: Number, required: true }, // Рік народження
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true }, // Стать користувача
  profilePhotoUrl: { type: String, required: false }, // URL фото профілю
});

const User = mongoose.model('User', userSchema);

module.exports = User;
