import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FavouriteContext } from "../contexts";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (location, longitude, latitude) => {
    
    setFavourites([
      ...favourites,

      { location: location, longitude: longitude, latitude: latitude },
    ]);
  };
  const removeFromFavourites = (location) => {
    
    setFavourites(favourites.filter((fav) => fav.location !== location));
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
