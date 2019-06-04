import React from "react";
import countriesData from "../countries.json";
import { Link } from "react-router-dom";

const countriesList = countriesData.data;

const CountryDetail = props => {
  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };

    return countriesList.find(theCountry);
  };
  const { id } = props.match.params;
  const foundCountry = getCountry(id);

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map(country => {
                  return (
                    <li key={country}>
                      <Link to={`/country/${country}`}>{country}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
