import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Link } from 'react-router-dom'

function CountryDetails() {
    const [detail, setDetail] = useState()

    const {id} = useParams()

  

    
    useEffect(() => {
        async function makeApi (){
            await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
                .then((res) => {
                    console.log(res)
                    let data = {
                        name: res.data.name.common,
                        capitol: res.data.capital,
                        area: res.data.area,
                        borders: res.data.borders

                    }
                    setDetail(data)
                })
        }
                
        makeApi()
    }, [id])
    
    console.log(detail)
    
      return (
        <div>
        hey
        <h1>Country Info</h1>
        <h2>{detail.name}</h2>
        <h2>{detail.capitol}</h2>
        <h2>{detail.area}</h2>
        
        {
        detail.borders.map((countries) => {
                    return (
                        <div key={countries}>
                            <Link to={`/${countries}`}>{countries}</Link>
                        </div>
                    )
                })
            }

      
        </div>
      )
    }
export default CountryDetails



// function CountriesList() {

//     const [country, setCountry] = useState(null)
    
    
//     useEffect(() => {
//         async function makeApi (){
//             await axios.get('https://ih-countries-api.herokuapp.com/countries/IND')
//                 .then((res) => {
//                     setCountry(res.data)
//                 })
//         }
                
//         makeApi()
//     }, [])
    
//     console.log(country.name.common)
    
//       return (
//         <div>
//         <h1>Countries List</h1>
//         {/* {
//             country.map((countries, i) => {
//                         return (
//                             <div key={countries.name.common}>
//                                 <Link to={`/pokemon/${i+1}`}>{countries.name.common}</Link>
//                             </div>
//                         )
//                     })
//                 } */}
//         </div>
//       )
//     }