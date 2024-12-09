const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const connectDB = require('./db.cjs');
const Establishment = require('./backend/models/Establishment.cjs');
const Country = require('./backend/models/Country.cjs');
const Dish = require('./backend/models/Dish.cjs');
const Region = require('./backend/models/Region.cjs');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Підключення до бази даних
connectDB();

// Middleware
app.use(express.json());


// Отримання всіх закладів
app.get('/api/establishments', async (req, res) => {
  try {
    const establishments = await Establishment.find();
    console.log(establishments);
    res.json(establishments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// --- Маршрути для регіонів ---

// Отримання всіх регіонів
app.get('/api/regions', async (req, res) => {
  try {
    const regions = await Region.find();
    console.log(regions);
    res.json(regions);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// --- Маршрути для страв ---

// Отримання всіх страв
app.get('/api/dishes', async (req, res) => {
  try {
    const dishes = await Dish.find();
    console.log(dishes);
    res.json(dishes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Отримання страв за назвою країни
app.get('/api/dishes/:countryName', async (req, res) => {
  try {
    let { countryName } = req.params;
    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const dishes = await Dish.find({ country: countryName });
    console.log(dishes);
    res.json(dishes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// --- Маршрути для країн ---

// Отримання всіх країн
app.get('/api/countries', async (req, res) => {
  try {
    const countries = await Country.find();
    console.log(countries);
    res.json(countries);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
