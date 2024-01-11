import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

function Header() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const fetchData = async () => {
    if (city.trim() === "") {
      setShowToast(true); // Show toast if city input is empty
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      );
      setWeatherData(response.data);
      setShowToast(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to hide the toast
  const hideToast = () => {
    setShowToast(false);
  };
  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="position-relative">
        <div className="toast-container position-absolute top-0 end-0 p-3">
          <div
            className={`toast ${showToast ? "show" : ""}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">WeatherApp</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={hideToast}
              ></button>
            </div>
            <div className="toast-body">
              Incorrect input. Please enter a valid city name.
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand text-white" href="#">
              <i class="fa-solid fa-cloud-moon icon"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    SignIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="header-section text-white py-5">
          <div className="center-div">
            <h1 className="fw-bold main-heading ">Find Weather Forcast</h1>
            <div className="input-group mb-3 ">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-control inputstyle"
                placeholder="Enter your city name"
                disabled={isLoading} // Disable input when loading
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
            </div>
            {/* <img src={Image2} alt="snowman" className="centered-snowman"/> */}
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
                <h3>{weatherdata.weather[0].main}</h3>
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
       <Footer/>
      </div>
    </>
  );
}
export default Header;
