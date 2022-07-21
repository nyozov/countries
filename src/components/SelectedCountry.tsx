import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
const SelectedCountry: React.FC = () => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [loading, setLoading] = useState<Boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${location.pathname.slice(
          9,
          location.pathname.length
        )}?fullText=true`
      );
      console.log(response);

      if (response.status === 200) {
        setCountry(response.data[0]);
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      {country && (
        <div className="duration-150 border w-full h-full cursor-pointer shadow bg-white">
          <img className="w-full  h-1/2" src={country.flags.png} />
          <div className="p-4 border-t">
            <p className="font-semibold text-lg">{country.name.common}</p>
            <div className="text-sm font-light text-gray-600">
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedCountry;
