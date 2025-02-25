import React, { useState } from 'react';
import axios from 'axios';

const WeatherTool = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const handleGetWeather = async () => {
    const response = await axios.post('https://rirm-assignment-backend.vercel.app/get-weather', { location });
    setWeather(response.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather API Tool</h1>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter location (e.g., London)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGetWeather}
      >
        Get Weather
      </button>
      {weather && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Weather in {weather.name}:</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherTool;