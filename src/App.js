import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState(null);
  const [showCountryDetail, setShowCountryDetail] = useState(false);

  function RightSide() {
    return (
      <Grid item xs={6}>
        <CountryDetail />
      </Grid>
    );
  }

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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {countries.map((country, i) => {
              return (
                <div key={`${country.name.common}${i}`} className="content">
                  <Card
                    className="countryCard"
                    sx={{ maxWidth: 345 }}
                    onClick={() => {
                      setShowCountryDetail(!showCountryDetail);
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="20"
                      sx={{ width: 20 }}
                      image={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt="flag"
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {country.name.common}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Grid>
          {showCountryDetail && <RightSide />}
        </Grid>
      </div>
    );
  }
}

export default App;
