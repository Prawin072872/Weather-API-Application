import React, { useState } from "react";
import axios from "axios";

const QuickView = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?",
        {
          params: {
            key: "53c569aaa74c447097581551241806",
            q: city,
          },
        },
      );
      setWeather(response.data);
    } catch (err) {
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Current Weather</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Get Current Weather
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b-lg p-4 mt-4">
            <h3 className="text-xl font-semibold">
              {weather.location.name}, {weather.location.region},{" "}
              {weather.location.country}
            </h3>
            <p>Local Time: {weather.location.localtime}</p>
            <p>
              Temperature: {weather.current.temp_c}°C ({weather.current.temp_f}
              °F)
            </p>
            <p>Condition: {weather.current.condition.text}</p>
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
            />
            <p>
              Feels Like: {weather.current.feelslike_c}°C (
              {weather.current.feelslike_f}°F)
            </p>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>
              Wind: {weather.current.wind_kph} kph ({weather.current.wind_mph}{" "}
              mph) {weather.current.wind_dir}
            </p>
            <p>
              Pressure: {weather.current.pressure_mb} mb (
              {weather.current.pressure_in} in)
            </p>
            <p>
              Precipitation: {weather.current.precip_mm} mm (
              {weather.current.precip_in} in)
            </p>
            <p>
              Visibility: {weather.current.vis_km} km (
              {weather.current.vis_miles} miles)
            </p>
            <p>UV Index: {weather.current.uv}</p>
            <p>
              Gust: {weather.current.gust_kph} kph ({weather.current.gust_mph}{" "}
              mph)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickView;
