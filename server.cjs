const express = require('express');
const cors = require('cors');
const connectDB = require('./db.cjs');
const Establishment = require('./backend/models/Establishment.cjs');
const Country = require('./backend/models/Country.cjs');
const Dish = require('./backend/models/Dish.cjs');
const Region = require('./backend/models/Region.cjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Fetch establishments
app.get('/api/establishments', async (req, res) => {
  try {
    const establishments = await Establishment.find();
    console.log(establishments); // Log data fetched from DB
    res.json(establishments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Fetch all regions
app.get('/api/regions', async (req, res) => {
  try {
    const regions = await Region.find(); // Отримуємо всі регіони з бази
    console.log(regions); // Логування даних
    res.json(regions); // Відправка даних на фронт
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


// Fetch dishes by country name
app.get('/api/dishes/:countryName', async (req, res) => {
  try {
    let { countryName } = req.params;
    // Перетворюємо першу букву країни на велику
    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const dishes = await Dish.find({ country: countryName }); // Отримуємо страви за країною
    console.log(dishes); // Логування страв
    res.json(dishes); // Відправка страв на фронт
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});



// Fetch all dishes from all countries



app.get('/api/countries', async (req, res) => {
  try {
    const countries = await Country.find(); // Отримання всіх країн
    console.log(countries); // Логування даних
    res.json(countries); // Відправка даних на фронт
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
app.get('/api/dishes', async (req, res) => {
  try {
    const countries = await Dish.find(); // Отримання всіх країн
    console.log(countries); // Логування даних
    res.json(countries); // Відправка даних на фронт
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
// Fetch dishes by country
// Fetch dishes by country name





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
