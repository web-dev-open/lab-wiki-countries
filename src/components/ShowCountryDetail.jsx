import axios from "axios";
import React, { useEffect, useState } from "react";

function ShowCountryDetail() {
  const [countries, setCountries] = useState(null);
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      setCountries(response.data);
    }
    fetchData();
  }, []);

  if (countries) {
    return showCountry ? <div>country</div> : <div>Select Country</div>;
  }
}

export default ShowCountryDetail;
