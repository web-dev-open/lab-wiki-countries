import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function CountryDetail() {
  const { code, code2 } = useParams();
  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${code}`
      );
      const {
        name: { common },
        capital,
        alpha2Code,
        alpha3Code,
        area,
        borders,
      } = response.data;
      let details = {
        common,
        capital,
        alpha2Code,
        alpha3Code,
        area,
        borders,
      };
      setCountryDetail(details);
    }
    fetchCountries();

    // console.log(countries.getName(countryDetail.alpha2Code, "en"));
  }, [code]);

  if (countryDetail) {
    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img
              alt="flag"
              src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
            />
            <h1>{countryDetail.common}</h1>
            {console.log(countries.getName(countryDetail.alpha2Code, "en"))}

            <p>Capital: {countryDetail.capital}</p>
            <p>Area: {countryDetail.area} km 2</p>

            <p>Borders:</p>
            {countryDetail.borders.map((border, code2) => {
              return (
                <div key={code2}>
                  <Link to={`/country/${border}`}>
                    {countries.getName(border, "en")}

                    {/* {border} */}
                    {console.log(countryDetail.alpha3Code)}
                  </Link>
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Routes>
          <Route path="/country/:code2" element={<CountryDetail />} />
        </Routes>
      </div>
    );
  }
}
export default CountryDetail;
