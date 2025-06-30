import { createContext, useContext } from "react";

export const WeatherContext = createContext();
export const FavouriteContext = createContext();
export const LocationContext = createContext();

function useWeatherContext() {
  return useContext(WeatherContext);
}
function useFavouriteContext() {
  return useContext(FavouriteContext);
}
function useLocationContext() {
  return useContext(LocationContext);
}

export { useWeatherContext, useFavouriteContext, useLocationContext };
