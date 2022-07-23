import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SelectedCountry from "./components/SelectedCountry";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';
import {Country, Flag, Name} from './interfaces'

const App: React.FC = () => {
  const [lightMode, setLightMode] = useState("light")
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);

      if (response.status === 200) {
        setCountries(response.data);
      }
    };

    fetchCountries();
  }, []);
  return (
    <div className={`${lightMode} bg-white dark:bg-gray-900 min-h-screen`}>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <Routes>
        <Route path="/" element={<Homepage countries={countries}/>} />
        <Route path="country/:name" element={<SelectedCountry countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
