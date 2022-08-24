import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "./api";



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Chart = () => {
    const [dailydata, setdailydata] = useState([]);
    
    useEffect(() => {
      const fetchApi = async () => {
        setdailydata(await fetchDailyData());
        console.log(dailydata)

    };fetchApi()
    
  }, []);

  const lineChart = (dailydata.length ? (
    <Line
      data={{
        labels: dailydata.map(({ Date }) => Date), 
        datasets: [
          {
            label: 'Infected',
            data: dailydata.map(({ Confirmed }) => Confirmed),
            borderColor: "#3333ff",
            fill: "true",
          },
          {
            data: dailydata.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgb(255,0,0,0.5)",
            fill: "true",
          },
        ],
      }}
      
    />
  ) : null)
 

  

  return <div>
      {lineChart}
  </div>;
};

export default Chart;
