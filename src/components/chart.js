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
  PointElement,
  LineElement,
} from "chart.js";
import { Container } from "@mui/system";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);



const Chart = ({data , country}) => {
    const [dailydata, setdailydata] = useState([]);
    useEffect(() => {
      const fetchApi = async () => {
        setdailydata(await fetchDailyData());

      };
        fetchApi()
    
  }, []);


  const lineChart = (dailydata.length ? (
    <Line
      data={{
        labels: dailydata?.map(({ Date }) => Date), 
        datasets: [
          {
            label: 'Infected',
            data: dailydata?.map(({ Confirmed }) => Confirmed),
            borderColor: "#3333ff",
            fill: "true",
          },
          {
            data: dailydata?.map(({ Death }) => Death),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgb(255,0,0,0.5)",
            fill: "true",
          },
        ],
      }}
      
    />
  ) : null)
  const BarChart = 
  (data?.confirmed
  ?
 <Bar
    // why we use double curly braces here
    data={{
      labels:["Confirmed","Deaths" , "Recovered"],
      datasets:[
      {
        label:'people',
        backgroundColor:[
                    'rgba(0,0,255,0.5)',
                    'rgba(255,0,0,0.5)',
                    'rgba(0,255,0,0.5)',
        ],
        // why we put all the data in square bracket
        data:[country?.confirmed?.value,country?.deaths?.value,country?.recovered?.value] 
        
      }
      ]
    }}
    
    
    
    />:null)  

  return <div>
   <Container> {country ? BarChart:lineChart} </Container>
  </div>;
};

export default Chart;
