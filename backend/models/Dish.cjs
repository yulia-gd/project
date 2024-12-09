const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Унікальний ідентифікатор страви
  name: { type: String, required: true }, // Назва страви
  description: { type: String, required: true }, // Опис страви
  imageUrl: { type: String, required: true }, // Посилання на зображення страви
  country: { type: String, required: true }, // Назва країни походження
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
