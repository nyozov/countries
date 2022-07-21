import { useEffect, useState } from "react";
import axios from "axios";

interface Country {
  id: number;
  name: Name;
 
}

interface Name {
  common: string;
}
const Homepage: React.FC = () => {
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
    <div>
      <div>
        {countries && countries.map(country => (<div>
          
          {country.name.common}
           </div>))}
       
      </div>
    </div>
  );
};

export default Homepage;
