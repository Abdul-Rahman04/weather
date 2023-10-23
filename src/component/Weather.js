import React, { useState } from "react";
import "./wheatherApp.css";
import search_icon from "../assets/search.png";
import cloud from "../assets/cloud.png";
import sun from "../assets/sun.png";
import wind from "../assets/wind.png";
import html from "../assets/html.jpg";
export const Weather = () => {
  const [wicon, setWicon] = useState("cloud");
  let api_key = "55e5286686daf31bad2a735dfbe3f2fa ";
  const search = async () => {
    const element = document.getElementsByClassName("input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const temperature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("location");

    temperature[0].innerHTML = Math.floor(data.main.temp) + "&deg;C";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(html);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(sun);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(sun);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(wind);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(wind);
    } else {
      setWicon(html);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="input" placeholder="search the city" />
        <div className="search">
          <img
            src={search_icon}
            alt=""
            className="icon"
            onClick={() => {
              search();
            }}
          />
        </div>
      </div>
      <div className="cloud">
        <img src={wicon} alt="" className="cloud" />
      </div>
      <div className="temp">24&deg;c</div>
      <div className="location">TAMIL NADU</div>
    </div>
  );
};
