const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const connectDB = require('./db.cjs');
const Establishment = require('./backend/models/Establishment.cjs');
const Country = require('./backend/models/Country.cjs');
const Dish = require('./backend/models/Dish.cjs');
const Region = require('./backend/models/Region.cjs');
const User = require('./backend/models/User.cjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Підключення до бази даних
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://yulia-gd.github.io/project/' // URL фронтенду на GitHub Pages
}));

// Функція для створення JWT токена
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Middleware для перевірки токену
const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// --- Маршрути для користувачів ---

// Реєстрація користувача
app.post('/api/register', async (req, res) => {
  try {
    const { id, email, name, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    user = new User({ id, email, name, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Логування користувача
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Отримання даних користувача
app.get('/api/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Збереження закладу для користувача
app.post('/api/user/save-establishment', auth, async (req, res) => {
  try {
    const { establishmentId } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.savedEstablishments.includes(establishmentId)) {
      user.savedEstablishments.push(establishmentId);
      await user.save();
    }

    res.json({ message: 'Establishment saved', savedEstablishments: user.savedEstablishments });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// --- Маршрути для закладів ---

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
