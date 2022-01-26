import { useEffect, useState } from "react";
import "./App.css";
import { CasesByCountries, CasesCounts, WorldMap } from "./components";
import { sortData } from "./utils";

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [countryCode, setCountryCode] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [tableData, seTtableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        setDataLoaded(true);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
          const sortedData = sortData(data);
          seTtableData(sortedData);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    setDataLoaded(false);
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        setCountryCode(countryCode);
        setDataLoaded(true);
      });
  };

  return (
    <div className="container w-full lg:w-4/5 mx-auto py-10 ">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-2">
          <div className="flex justify-between flex-col md:flex-row mx-10">
            <h1 className="font-bold text-3xl text-red-500 ">
              Covid 19 Tracker
            </h1>
            <select onChange={onCountryChange} className="px-4 py-2">
              <option value={countryCode}>Worldwide</option>
              {countries.map((country, index) => (
                <option value={country.value} key={index}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {dataLoaded && <CasesCounts casescount={countryInfo} />}
          <WorldMap countries={tableData} />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <CasesByCountries countries={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
