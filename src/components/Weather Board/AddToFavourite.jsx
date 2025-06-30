import React, { useEffect, useState } from "react";
import heartIcon from "../../assets/heart.svg";
import heartRedIcon from "../../assets/heart-red.svg";
import { useFavouriteContext, useWeatherContext } from "../../contexts";

const AddToFavourite = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouriteContext();
  const { weatherData } = useWeatherContext();
  const { location, longitude, latitude } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);

  const handleToogleFavourites = () => {

    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
        
      addToFavourites(location, longitude, latitude);
    } else {
      removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleToogleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? heartRedIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
