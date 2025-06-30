import React from "react";
import { useFavouriteContext, useLocationContext } from "../../contexts";

const FavouriteModal = () => {
  const { favourites } = useFavouriteContext();
  const { setSelectedLocation } = useLocationContext();
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => {
            return (
              <li key={fav.location} className="hover:bg-gray-200">
                <a onClick={() => setSelectedLocation({ ...fav })}>
                  {fav.location}
                </a>
              </li>
            );
          })
        ) : (
          // The  Empty State Component
          <li className="flex flex-col items-center text-center p-6 space-y-2 cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>

            {/* 2. A Clear Heading */}
            <h4 className="font-semibold text-gray-700">No Favourites Yet</h4>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FavouriteModal;
