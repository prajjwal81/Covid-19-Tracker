import React, { useEffect, useState } from "react";
import { FormControl,  NativeSelect } from "@mui/material";
import { fetchCountries } from "./api";

const CountryPicker = ({handelSubmitchange}) => {
 const [countries,setcountries]=useState([])
//  console.log(countries)

 useEffect(()=>{
   const countrydata = async ()=>{
    setcountries( await fetchCountries())
     
    }
    countrydata()

  },[])



  return (
    <div style={{paddingLeft:'55rem', width:'400px'}}>
    <FormControl  style={{ width:'200px' }}>
    <NativeSelect  onChange={e => handelSubmitchange(e.target.value)}>
        <option value="" >Global</option>
      {countries.map((country,i)=><option key={i} value={country}>{country}</option>)}
    </NativeSelect>
    </FormControl>
    </div>
  );
};

export default CountryPicker;
