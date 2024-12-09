const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Ідентифікатор регіону (наприклад, asia, europe)
  name: { type: String, required: true }, // Назва регіону (наприклад, Asia, Europe)
  description: { type: String, required: true }, // Опис регіону
  imageUrl: { type: String, required: true }, // URL зображення
  countries: { type: [String], required: true }, // Список країн в регіоні
});

const Region = mongoose.model('Region', regionSchema);

module.exports = Region;
