import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState(null);

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
        {countries.map((country, i) => {
          return (
            <div key={`${country.name.common}${i}`}>
              <Card sx={{ maxWidth: 345 }}>
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
      </div>
    );
  }
}

export default App;
