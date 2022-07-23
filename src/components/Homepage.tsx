import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Country, Flag, Name, HomeProps} from '../interfaces'

const Homepage: React.FC<HomeProps> = ({ countries }: HomeProps) => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  return (
    <div>
      <div className="p-4 bg-gray-100 dark:bg-gray-900  w-screen flex flex-col sm:flex-row justify-between sm:items-center items-start">
        <input
          onChange={handleInput}
          type="text"
          className="shadow w-full sm:w-[300px] dark:text-gray-200 dark:bg-gray-800 p-2 px-4 focus:outline-none"
          placeholder="Search for a country..."
        />

        <select
          value={region}
          onChange={handleSelect}
          defaultValue=""
          name="regions"
          id="regions"
          className="p-2 px-4 mt-2 sm:mt-0 text-gray-400 dark:bg-gray-800 shadow focus:outline-none mr-4"
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
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 bg-gray-100 dark:bg-gray-900">
        {countries &&
          countries
            .filter((country) =>
              country.region.toLowerCase().includes(region.toLowerCase())
            )
            .filter((country) =>
              country.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map((country) => (
              <Link to={`country/${country.name.common.toLowerCase()}`}>
                <div
                  key={Number(country.ccn3)}
                  className="duration-150 border w-full h-full cursor-pointer shadow bg-white dark:bg-gray-800 dark:text-white dark:border-none"
                >
                  <img className="w-full sm:h-1/2" src={country.flags.png} />
                  <div className="p-4 border-t">
                    <p className="font-semibold text-lg">
                      {country.name.common}
                    </p>
                    <div className="text-sm font-light text-gray-600">
                      <p>Population: {country.population.toLocaleString()}</p>
                      <p>Region: {country.region}</p>
                      <p>Capital: {country.capital}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Homepage;
