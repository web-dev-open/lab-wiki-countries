import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState(null);
  // const [showCountryDetail, setShowCountryDetail] = useState(false);

  // function RightSide() {
  //   return (
  //     <Grid item xs={6}>
  //       <CountryDetail />
  //     </Grid>
  //   );
  // }

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
    return (
      <div>
        <Navbar />
        <Link to="/">Home</Link>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            {countries.map((country, code) => {
              return (
                <div key={`${country.name.common}${code}`} className="content">
                  <Card className="countryCard" sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="20"
                      sx={{ width: 20 }}
                      image={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt="flag"
                    />
                    <CardContent>
                      <Link to={`/country/${country.alpha3Code}`}>
                        {country.name.common}
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Grid>
          <Routes>
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </Grid>
      </div>
    );
  }
}

export default App;
