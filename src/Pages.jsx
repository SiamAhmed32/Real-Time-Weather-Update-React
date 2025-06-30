import { useState, useEffect } from "react";
import Header from "./components/Header Part/Header";
import WeatherBoard from "./components/Weather Board/WeatherBoard";

import Loading from "./Loading";
import { useWeatherContext } from "./contexts";

import clearSkyImg from "./assets/backgrounds/clear-sky.jpg";
import fewCloudsImg from "./assets/backgrounds/few-clouds.jpg";
import mistImg from "./assets/backgrounds/mist.jpeg";
import rainyDayImg from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsImg from "./assets/backgrounds/scattered-clouds.jpg";

import snowImg from "./assets/backgrounds/snow.jpg";

import thunderStormImg from "./assets/backgrounds/thunderstorm.jpg";
import winterImg from "./assets/backgrounds/winter.jpg";

const Pages = () => {
  const { loading, weatherData } = useWeatherContext();
  const [climateImg, setClimateImg] = useState("");

  function getBackgroundImage(climate) {
    if (climate === "Rain") {
      return rainyDayImg;
    } else if (climate === "Clouds") {
      return scatteredCloudsImg;
    } else if (climate === "Clear") {
      return clearSkyImg;
    } else if (climate === "Snow") {
      return snowImg;
    } else if (climate === "Thunder") {
      return thunderStormImg;
    } else if (climate === "Fog") {
      return winterImg;
    } else if (climate === "Haze") {
      return fewCloudsImg;
    } else if (climate === "Mist") {
      return mistImg;
    } else {
      // This is the default case
      return clearSkyImg;
    }
  }
  useEffect(() => {
    const bgImg = getBackgroundImage(weatherData.climate);
    setClimateImg(bgImg);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <Loading message={loading.message} />
      ) : (
        <div
          style={{ backgroundImage: `url(${climateImg})` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Pages;
