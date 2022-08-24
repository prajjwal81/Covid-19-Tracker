import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'; 

export const fetchData = async (country) => {
            let  changeableUrl = url
            if(country){
                changeableUrl = `${url}/countries/${country}`
            }
            try {
                const res = await axios.get(changeableUrl)
                // console.log(res)
                return res;
                
            } catch (err) {
                console.error(err)
                
            }
}

export const fetchDailyData = async () =>{
   try {
    const {data} = await axios.get(`${url}/daily`)
    // console.log(data)
    // why we use bracket in in call back fnc or outside the object
    const modifiedData = data.map((dailyData)=> ({
        Confirmed:dailyData.confirmed.total, 
        Death:dailyData.deaths.total,
        Date:dailyData.reportDate }) )
        return modifiedData
    
   } catch (error) {
    console.error(error)
   }
}
// console.log(fetchDailyData)
export const fetchCountries = async () =>{
    try {
     const res = await axios.get(`${url}/countries`)
     console.log(res)
     
    } catch (error) {
     console.error(error)
    }
 }