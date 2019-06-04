import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import countriesData from "./countries.json";
import CountryDetail from "./components/CountryDetail";
import { NavLink, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: countriesData.data
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar bg-primary navbar-dark mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row" style={{ width: "100%" }}>
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {this.state.countriesList.map(country => {
                  return (
                    <NavLink
                      key={country.name.common}
                      className="list-group-item list-group-item-action"
                      to={`/country/${country.cca3}`}
                    >
                      {country.flag} {country.name.common}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route
                  exact
                  path="/country/:id"
                  // {...CountryDetail}
                  component={CountryDetail}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
