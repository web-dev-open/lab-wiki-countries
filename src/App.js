import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {
  return (
    <div style={{display: "flex"}}>

      <NavBar/>
      <CountriesList/>
      <Routes >
          <Route path="/:id" element={<CountryDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
