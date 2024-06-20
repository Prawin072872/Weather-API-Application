import React, { useState } from "react";
import weatherData from "../weatherData.json";

const TravelerView = () => {
  const [destinations, setDestinations] = useState([]);
  const [weather, setWeather] = useState({});
  const [newDestination, setNewDestination] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleAddDestination = () => {
    if (newDestination && newDate) {
      setDestinations((prev) => [
        ...prev,
        { id: prev.length + 1, name: newDestination, date: newDate },
      ]);
      setNewDestination("");
      setNewDate("");
    }
  };

  const fetchWeatherData = () => {
    destinations.forEach((destination) => {
      const locationWeather = weatherData[destination.name];
      if (locationWeather) {
        const dateWeather = locationWeather[destination.date];
        if (dateWeather) {
          setWeather((prev) => ({ ...prev, [destination.name]: dateWeather }));
        } else {
          console.error("No weather data for this date:", destination.date);
        }
      } else {
        console.error("No weather data for this location:", destination.name);
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Know your Destination's Weather
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={newDestination}
          onChange={(e) => setNewDestination(e.target.value)}
          placeholder="Enter destination"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleAddDestination}
          className="bg-blue-500 bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
        >
          Add Destination
        </button>
        <button
          onClick={fetchWeatherData}
          className="bg-blue-500 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Fetch Weather
        </button>
      </div>

      <ul>
        {destinations.map((destination) => (
          <li key={destination.id} className="border-b py-2">
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-2 rounded-md">
              <h3 className="text-lg">
                {destination.name} - {destination.date}
              </h3>
              {weather[destination.name] ? (
                <p>
                  {weather[destination.name].temperature}°C,{" "}
                  {weather[destination.name].condition}
                </p>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelerView;
