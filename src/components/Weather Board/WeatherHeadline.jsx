import React from "react";

import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import fogIcon from "../../assets/icons/fog.svg";
import mistIcon from "../../assets/icons/mist.svg";
import rainyIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";

import pinIcon from "../../assets/pin.svg";

import { useWeatherContext } from "../../contexts";
import { getFormattedDate } from "../../utilis/date-util";
import LocationAwareLiveClock from "./LocationAwareLiveClock";
// import LiveClock from "./LiveClock";

const WeatherHeadline = () => {
  const { weatherData } = useWeatherContext();
  const { temperature, location, time, climate } = weatherData;

  function getWeatherIcon(climate) {
    if (climate === "Rain") {
      return rainyIcon;
    } else if (climate === "Clouds") {
      return cloudIcon;
    } else if (climate === "Clear") {
      return sunnyIcon;
    } else if (climate === "Snow") {
      return snowIcon;
    } else if (climate === "Thunder") {
      return thunderIcon;
    } else if (climate === "Fog") {
      return fogIcon;
    } else if (climate === "Haze") {
      return hazeIcon;
    } else if (climate === "Mist") {
      return mistIcon;
    } else {
      // This is the default case
      return sunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-xl lg:text-lg font-extrabold">
        <span>
          <LocationAwareLiveClock /> - {getFormattedDate(time, "date", false)}
        </span>
      </p>
    </div>
  );
};

export default WeatherHeadline;
