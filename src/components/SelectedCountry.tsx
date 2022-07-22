import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { json } from "body-parser";

interface Country {
  id: number;
  name: Name;
  flags: Flag;
  population: number;
  capital: string;
  region: string;
  tld: string;
  currencies: any;
  languages: any;
  borders: [];
}
interface Flag {
  png: string;
}

interface Name {
  common: string;
  nativeName: any;
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
    console.log(country?.currencies);
  }, []);

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="w-11/12 mt-4">
        <Link
          to="/"
          className="p-1 px-6 border shadow bg-white font-light text-gray-600 text-sm"
        >
          Back
        </Link>
      </div>

      {country && (
        <div className="flex mt-12 justify-center flex-col items-center w-screen">
          <img className="w-11/12 border h-[250px]" src={country.flags.png} />
          <div className="text-left w-11/12 ">
            <p className="font-semibold text-xl py-4">{country.name.common}</p>
            <div className=" text-sm font-light text-gray-600">
              <p>
                <b>Native Name:</b>{" "}
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ]?.common
                }
              </p>
              <p>
                <b>Population:</b> {country.population.toLocaleString()}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>

              <p>
                <b>Top Level Domain:</b> {country.tld}
              </p>
              <p>
                <b>Currencies:</b>{" "}
                {country.currencies[Object.keys(country.currencies)[0]].name}{" "}
              </p>
              <p>
                <b>Languages:</b>{" "}
                {country.languages[Object.keys(country.languages)[0]]}
              </p>

              <div>
                {country.borders && (
                  <h2 className="font-semibold mt-6">Border Countries:</h2>
                )}
                <div className="flex">
                  {country.borders?.map((border) => (
                    <div className="mr-4 border shadow cursor-pointer p-1 font-sm mt-2 px-4">
                      {border}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedCountry;
