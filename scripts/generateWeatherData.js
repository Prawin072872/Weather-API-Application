const fs = require("fs");
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Indore",
];

const conditions = [
  "Sunny",
  "Cloudy",
  "Rainy",
  "Partly Cloudy",
  "Hot",
  "Foggy",
  "Snowy",
  "Windy",
];

const getRandomCondition = () =>
  conditions[Math.floor(Math.random() * conditions.length)];
const getRandomTemperature = () => Math.floor(Math.random() * 40) - 10; // Temperature between -10 and 30

const generateWeatherData = (cities) => {
  const weatherData = {};

  cities.forEach((city) => {
    weatherData[city] = {};

    for (let i = 1; i <= 60; i++) {
      const date = new Date(2024, 6, 1);
      date.setDate(date.getDate() + i);
      const dateString = date.toISOString().split("T")[0];

      weatherData[city][dateString] = {
        temperature: getRandomTemperature(),
        condition: getRandomCondition(),
      };
    }
  });

  return weatherData;
};

const weatherData = generateWeatherData(cities);

fs.writeFileSync("src/weatherData.json", JSON.stringify(weatherData, null, 2));
console.log("Weather data generated successfully");
