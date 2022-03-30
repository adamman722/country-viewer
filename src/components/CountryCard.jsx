import React from "react";
import { useSelector } from "react-redux";

function CountryCard() {
  const countries = useSelector((state) => state.countries.value);
  if (countries.length > 249) {
    console.log(countries);
  }
  return <div>CountryCard</div>;
}

export default CountryCard;
