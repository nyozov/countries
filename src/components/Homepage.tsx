import React, { useEffect, useState } from "react";
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
const Homepage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
    console.log(region);
  };

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
    <div>
      <div className="p-4 bg-gray-100 w-screen flex justify-between items-center">
        <input
          onChange={handleInput}
          type="text"
          className="rounded-lg p-2 px-4"
          placeholder="Search for a country..."
        />

        <select
          value={region}
          onChange={handleSelect}
          name="regions"
          id="cars"
          className="p-2 px-4 rounded-lg"
          placeholder="Filter by Region"
        >
          <option value="" selected>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="p-4 grid grid-cols-4 gap-4 bg-gray-100">
        {countries &&
          countries
            .filter((country) =>
              country.region.toLowerCase().includes(region.toLowerCase())
            )
            .filter((country) =>
              country.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map((country) => (
              <div
                key={country.id}
                className="duration-150 border cursor-pointer"
              >
                <img
                  className="w-full object-cover h-[150px]"
                  src={country.flags.png}
                />
                <div className="p-4">
                  <p className="font-semibold text-lg">{country.name.common}</p>
                  <div className="text-sm font-light text-gray-600">
                    <p>Population: {country.population}</p>
                    <p>Region {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Homepage;
