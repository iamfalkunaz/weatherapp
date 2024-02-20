import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import worldCities from "./data/world-city-name.json";
import Navbar from "./shared/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./shared/Footer";

const url = `https://api.openweathermap.org/data/2.5/weather?`;
const apikey = "bbff2fd81a95f0cc44090592f19cd1d3";

export const getWeatherData = async (city) => {
  try {
    const { data } = await axios.get(url + `q=${city}&appid=${apikey}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getWeatherEmoji = (condition) => {
  switch (condition) {
    case "Clear":
      return "☀️"; // sunny
    case "Clouds":
      return "☁️"; // cloudy
    case "Rain":
      return "🌧️"; // rainy
    case "fog":
      return "💨"; // fog
    case "Smog":
      return "😮‍💨"; //smog
    default:
      return "❓";
  }
};

function Header() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const fetchData = async () => {
    if (city.trim() === "") {
      toast.error("Empty Input field");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      );
      setWeatherData(response.data);
      console.log(response.data);
      toast.success("Get " + response.data.name + " weather ");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast.error("please write correct city name.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setCity(userInput);

    if (userInput.length > 0) {
      const filteredSuggestions = worldCities
        .filter((cityObj) =>
          cityObj.name.toLowerCase().startsWith(userInput.toLowerCase())
        )
        .slice(0, 3); // Assuming you want to show 5 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (cityName) => {
    setCity(cityName);
    setSuggestions([]);
    fetchData(cityName);
  };

 
  
  return (
    <>
      <div className="header">
        <Navbar />
        <section className="header-section text-white py-5">
          <div className="center-div">
            <h1 className="fw-bold main-heading ">Find Weather Forcast</h1>
            <div className="input-group mb-3 position-relative">
              <input
                
                type="text"
                value={city}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="form-control"
                placeholder="Enter your city name"
              />
               <button
                className="btn btn-outline-secondary header-buttons"
                type="button"
                onClick={fetchData}
                id="button-addon2"
                disabled={isLoading} // Disable button when loading
              >
                Search
              </button>
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => selectSuggestion(suggestion.name)}
                    >
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {isLoading && (
              <div className="text-center">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {weatherdata !== null ? (
              <div className="weather-condition">
                <h2 className="location fw-bold">Live Weather Condition</h2>
                <h3 className="emoji">
                  {weatherdata.weather[0].main}
                  {getWeatherEmoji(weatherdata.weather[0].main)}
                </h3>

                <div className="temperature">
                  <h1>{Math.round(weatherdata.main.temp - 273.15)}&deg;C</h1>
                </div>
                <div className="location">
                  <h3>
                    {weatherdata.name} | {weatherdata.sys.country}
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </section>
        <Footer className="social" />
      </div>
    </>
  );
}
export default Header;
