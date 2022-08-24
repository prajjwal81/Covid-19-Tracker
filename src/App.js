
import './App.css';
import React, { useState } from 'react';
import GridCards from './components/cards';
import image from './components/img/covid.png'
import CountryPicker from './components/countryPicker';
import { useEffect } from 'react';
import { fetchCountries, fetchDailyData, fetchData } from './components/api';
import  Chart from './components/chart'


function App() {
  const [fetchdata , setFechedData]=useState()
  useEffect(()=>{ 
    const getdata = async ()=>{
    const fetchedData= await  fetchDailyData()
    console.log (fetchedData)}
    getdata()
  },[])


  return (
    <div className="App" >
      <header className="App-header">
       <img src={image} alt=""  style={{paddingLeft:'50rem'}} />
       <div></div>
       <GridCards />
       <CountryPicker/>
       {/* <Chart/> */}
       
      
      </header>
    </div>
  );
}

export default App;
