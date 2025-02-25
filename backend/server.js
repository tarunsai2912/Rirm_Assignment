const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// iTqczztUddvB9geL

// Connect to MongoDB
mongoose.connect("mongodb+srv://tarunsairayapureddi:iTqczztUddvB9geL@rirm.5iaui.mongodb.net/?retryWrites=true&w=majority&appName=rirm") 

mongoose.connection.on('connected', () => {
    console.log('MongoDb is connected...');
})

app.get('/', (req, res) => {
    res.send('Welcome rirm')
})

// URL Deduplication Endpoint
app.post('/duplicate-urls', (req, res) => {
  const { urls } = req.body;
  const uniqueUrls = [...new Set(urls)];
  res.json({ uniqueUrls });
});

// Weather API Endpoint
app.post('/get-weather', async (req, res) => {
  const { location } = req.body;
  const apiKey = '9b26db35b2c24c6247577eaf48b27b4e'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});