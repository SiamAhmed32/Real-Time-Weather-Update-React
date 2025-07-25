import React from "react";
import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, error } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
