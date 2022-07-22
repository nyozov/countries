export interface Country {
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
  cca3: string;
}
export interface Flag {
  png: string;
}

export interface Name {
  common: string;
  nativeName: any;
}

export type HomeProps = {
  countries: Country[];
};