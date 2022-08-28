
import './App.css';
import React, { useState } from 'react';
import GridCards from './components/cards';
import image from './components/img/covid.png'
import CountryPicker from './components/countryPicker';
import { useEffect } from 'react';
import { fetchCountries, fetchDailyData, fetchData } from './components/api';
import  Chart from './components/chart'


function App() {
  const [data ,setdata]=useState([])
  const [Fetchdata,setFetchdata]=useState()

  

  async function handelSubmitchange(country){
    // how can country come here from handle submit
    const newData = await fetchData(country)
    setFetchdata(newData)
 
  }
console.log(Fetchdata)
 
  useEffect(()=>{ 
    const getdata = async ()=>{
    const res = await  fetchData()
   
   setdata(res)
  }
  getdata() 
  },[])



  return (
    <div className="App" >
      <header className="App-header">
       <img src={image} alt=""  style={{paddingLeft:'50rem'}} />
       <div></div>
       <GridCards data = {data}/>
       <CountryPicker handelSubmitchange = {handelSubmitchange}/>
       <Chart data = {data} country= {Fetchdata}/>
       
      
      </header>
    </div>
  );
}

export default App;
