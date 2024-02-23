import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
const apiKey = "bbff2fd81a95f0cc44090592f19cd1d3";
const weatherApiKey = '63865e8860814b22aca92421242202';

function MoreWeather() {
  const location = useLocation();
  const cityName = location.state.cityName;
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [historicalWeather, setHistoricalWeather] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forecastResponse = await axios.get(
          `${apiUrl}q=${cityName}&appid=${apiKey}`
        );

        // Find the index of the first forecast entry for tomorrow
        const startIndex = forecastResponse.data.list.findIndex((item) => {
          const forecastDate = new Date(item.dt * 1000);
          forecastDate.setHours(0, 0, 0, 0);
          return forecastDate > new Date();
        });

        // Create an array to hold one forecast per day
        const dailyForecasts = [];

        // Start from the first entry that is tomorrow
        for (
          let i = startIndex;
          i < forecastResponse.data.list.length;
          i += 8
        ) {
          // We add 8 because each day has 8 entries (every 3 hours)
          dailyForecasts.push(forecastResponse.data.list[i]);
          if (dailyForecasts.length === 3) break; // We only want 3 days of forecast
        }

        setWeatherForecast(dailyForecasts);
        toast.success(`Got weather forecast for ${cityName}`);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        toast.error("Error fetching weather data.");
      }
    };

    // Fetching historical data
    const fetchHistoricalData = async () => {
      try {
        // Assuming you want to fetch the data for the last 3 days
        const dates = getLastThreeDates();
        let historicalData = [];

        for (const date of dates) {
          const historicalWeatherUrl = `http://api.weatherapi.com/v1/history.json?key=${weatherApiKey}&q=${cityName}&dt=${date}`;
          const historyResponse = await axios.get(historicalWeatherUrl);
          historicalData.push(...processWeatherApiResponse(historyResponse.data));
        }

        setHistoricalWeather(historicalData);
        toast.success(`Got historical weather data for ${cityName}`);
      } catch (error) {
        console.error("Error fetching historical weather data:", error);
        toast.error("Error fetching historical weather data.");
      }
    };

    fetchData();
    fetchHistoricalData();
  }, [cityName]);

  // Function to process the response from WeatherAPI
  function processWeatherApiResponse(data) {
    return data.forecast.forecastday.map(day => ({
      date: day.date,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      weather: day.day.condition.text,
      icon: day.day.condition.icon,
    }));
  }

  // Function to get the last three dates
  function getLastThreeDates() {
    let dates = [];
    for (let i = 3; i > 0; i--) {
      let d = new Date();
      d.setDate(d.getDate() - i);
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  }

  return (
    <>
      <div className="moreweather">
        <Navbar />
        <div className="container">
          <h4
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Upcoming Weather Forecast for : {cityName}
          </h4>
          <div className="row alig">
            <table
              className="weather-forecast-table"
              style={{ color: "white" }}
            >
              <tbody>
                {weatherForecast.map((forecast, index) => (
                  <tr key={index}>
                    <td>{new Date(forecast.dt * 1000).toLocaleDateString()}</td>
                    <td>{Math.round(forecast.main.temp - 273.15)}°C</td>
                    <td>{forecast.weather[0].main}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h4
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Past 3 Days Weather Forecast for : {cityName}
            </h4>
            <div className="row">
              <table
                className="weather-forecast-table"
                style={{ color: "white" }}
              >
                <tbody>
                  {historicalWeather.map((history, index) => (
                    <tr key={index}>
                      <td>{history.date}</td>
                      
                      <td>{history.temp}°C</td>
                      <td>{history.weather}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MoreWeather;
