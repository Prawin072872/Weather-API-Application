import React, { useState } from "react";
import axios from "axios";

const EventDetails = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const formattedDate = date.split("-").reverse().join("-");
      const response = await axios.get(
        `https://api.weatherapi.com/v1/future.json?q=${city}&dt=${formattedDate}&key=53c569aaa74c447097581551241806`,
      );
      setWeather(response.data.forecast.forecastday[0].day);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather({ error: "Error fetching weather data" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-center">Event Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventName" className="block mb-1">
          Event Name:
        </label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <br />
        <label htmlFor="city" className="block mb-1">
          City:
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <br />
        <label htmlFor="date" className="block mb-1">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-4"
        >
          Get Event's weather
        </button>
      </form>
      {weather && !weather.error && (
        <div className="mt-4 bg-blue-100 border border-blue-200 rounded-md p-4">
          <h3 className="text-lg font-semibold">
            {eventName} - {city} - {date}
          </h3>
          <p>
            {weather.avgtemp_c}°C, {weather.condition.text}
          </p>
        </div>
      )}
      {weather && weather.error && (
        <p className="text-red-500">Error fetching weather data</p>
      )}
    </div>
  );
};

export default EventDetails;
