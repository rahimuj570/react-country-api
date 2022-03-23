import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 className="my-3 text-center ">Total Countries: {countries.length}</h1>
      <div className=" container">
        <div className="row">
          {countries.map((country, index) => (
            <Country key={index} data={country}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
