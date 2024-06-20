import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EventPlanner from "./components/EventPlanner";
import FarmingView from "./components/FarmingView";
import WeatherStories from "./components/WeatherStories";
import QuickView from "./components/QuickView";
import TravelerView from "./components/TravelerView";

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 shadow-md flex flex-wrap justify-between items-center">
        <div className="text-white text-xl font-bold mb-4 md:mb-0 ">
          Weather&nbsp;Dashboard
        </div>
        <div className="flex flex-wrap justify-end items-center">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 hover:underline  px-3 py-2 rounded-md relative transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/Event-Planner"
            className="text-white hover:bg-blue-700 hover:underline  px-3 py-2 rounded-md"
          >
            Event&nbsp;Planner
          </Link>
          <Link
            to="/FarmingView"
            className="text-white hover:bg-blue-700 hover:underline  px-3 py-2 rounded-md"
          >
            Farmer's&nbsp;View
          </Link>
          <Link
            to="/TravelerView"
            className="text-white hover:bg-blue-700 hover:underline  px-3 py-2 rounded-md"
          >
            Traveler's&nbsp;View
          </Link>
          <Link
            to="/WeatherStories"
            className="text-white hover:bg-blue-700 hover:underline  px-3 py-2 rounded-md"
          >
            Weather&nbsp;Stories
          </Link>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        <Routes>
          <Route exact path="/" element={<QuickView />} />
          <Route path="/Event-Planner" element={<EventPlanner />} />
          <Route path="/FarmingView" element={<FarmingView />} />
          <Route path="/TravelerView" element={<TravelerView />} />
          <Route path="/WeatherStories" element={<WeatherStories />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
