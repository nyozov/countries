import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SelectedCountry from "./components/SelectedCountry";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';

interface Country {
  id: number;
  name: Name;
  flags: Flag;
  population: number;
  capital: string;
  region: string;
}
interface Flag {
  png: string;
}

interface Name {
  common: string;
}



const App: React.FC = () => {
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
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage countries={countries}/>} />
        <Route path="country/:name" element={<SelectedCountry />} />
      </Routes>
    </div>
  );
}

export default App;
