import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetail() {
  const { code } = useParams();
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
        area,
      } = response.data;
      let details = {
        common,
        capital,
        alpha2Code,
        area,
      };
      setCountryDetail(details);
    }
    fetchCountries();
  }, [code]);

  if (countryDetail) {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              alt="flag"
              src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
            />
            <p>{countryDetail.common}</p>
            <p>Capital:{countryDetail.capital}</p>
            <p>Area: {countryDetail.area} km 2</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default CountryDetail;
