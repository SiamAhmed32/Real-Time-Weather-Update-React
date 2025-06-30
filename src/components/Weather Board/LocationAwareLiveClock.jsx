// src/components/LocationAwareLiveClock.jsx

import React, { useState, useEffect } from "react";
import { useWeatherContext } from "../../contexts";

const LocationAwareLiveClock = () => {
  // 1. Get the 'timezone' offset in seconds from the weather data
  const { weatherData } = useWeatherContext();
  const { timezone } = weatherData;

  // 2. This state will hold our calculated Date object
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // This function will run every second to update the time
    const updateClock = () => {
      const now = new Date();
      
      // Get the current time in UTC milliseconds. 
      // This is our universal starting point.
      const utcTimestamp = now.getTime();

      // Get the location's offset from UTC in milliseconds
      const locationOffset = timezone * 1000;

      // Create a new Date object by applying the location's offset to the UTC time
      const locationTime = new Date(utcTimestamp + locationOffset);

      setCurrentTime(locationTime);
    };

    // Run the update immediately when the component loads or the timezone changes
    if (timezone !== undefined) {
      updateClock();
    }

    // Set up the interval to tick every second
    const intervalId = setInterval(() => {
      if (timezone !== undefined) {
        updateClock();
      }
    }, 1000);

    // Cleanup the interval when the component is unmounted or the timezone changes
    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]); 
  if (timezone === undefined) {
    return <span>Loading Time...</span>;
  }

  
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Use AM/PM format

    timeZone: "UTC",
  }).format(currentTime);

  return formattedTime;
};

export default LocationAwareLiveClock;