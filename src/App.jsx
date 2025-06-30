import "./App.css";
import Pages from "./Pages";
import { LocationProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Pages />
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
