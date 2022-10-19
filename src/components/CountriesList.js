import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function CountriesList() {

const [country, setCountry] = useState([])


useEffect(() => {
    async function makeApi (){
        await axios.get('https://ih-countries-api.herokuapp.com/countries/')
            .then((res) => {
        
                setCountry(res.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              })
    }
            
    makeApi()
}, [])



  return (
    <div>
    <h1>Countries List</h1>
    {
        country.map((countries, i) => {
                    return (
                        <div key={countries.name.common}>
                            <Link to={`/${countries.alpha3Code}`}>{countries.name.common}</Link>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default CountriesList