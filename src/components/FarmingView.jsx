import React, { useState } from "react";
import axios from "axios";

const FarmingView = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/agweather?lat=${lat}&lon=${lon}&key=5d8c7fa070984fce8940a2da4f6c3a84`,
      );
      setWeather(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather({ error: "Error fetching weather data" });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Farming Conditions
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-l-md"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-r-md"
        />
      </div>
      <div className="mb-4 flex justify-center">
        <button
          onClick={handleFetchWeather}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-md"
        >
          Get Agri Details
        </button>
      </div>

      {weather && !weather.error ? (
        <div className="bg-blue-100 border border-blue-200 rounded-md p-4">
          <p>Soil Moisture (0-10cm): {weather.soilm_0_10cm} mm</p>
          <p>Soil Moisture (10-40cm): {weather.soilm_10_40cm} mm</p>
          <p>Rainfall Forecast: {weather.precip} mm</p>
          <p>Temperature (2m Avg): {weather.temp_2m_avg}°C</p>
          <p>Evapotranspiration: {weather.evapotranspiration} mm</p>
          <p>
            Frost Warnings:{" "}
            {weather.frostWarnings ? weather.frostWarnings : "None"}
          </p>
        </div>
      ) : (
        <p>{weather && weather.error ? weather.error : ""}</p>
      )}
    </div>
  );
};

export default FarmingView;
