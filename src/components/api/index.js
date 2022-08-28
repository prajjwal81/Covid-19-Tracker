import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'; 
// from where we are getting the country

export const fetchData = async (country) => {
            let  changeableUrl = url
            if(country){
                changeableUrl = `${url}/countries/${country}`
            }
            try {
                const res = await axios.get(changeableUrl)
                const {confirmed,deaths,recovered} = res.data
                let fetchedData = {confirmed,deaths,recovered} 
                return fetchedData;
                
            } catch (err) {
                console.error(err)
                
            }
}
fetchData()

export const fetchDailyData = async () =>{
   try {
    const {data} = await axios.get(`${url}/daily`)
    // console.log(data)
    // why we use bracket in  call back fnc or outside the object
    const modifiedData = data.map((dailyData)=> (
        {
        Confirmed:dailyData.confirmed.total, 
        Death:dailyData.deaths.total,
        Date:dailyData.reportDate 
    }
        )
        )
        return modifiedData
        
    
   } catch (error) {
    console.error(error)
   }
}
// console.log(fetchDailyData)
export const fetchCountries = async () =>{
    try {
     const {data:{countries}} = await axios.get(`${url}/countries`)
    //  why we have return to this
     return countries.map((country)=>country.name)

    //  console.log()
     
    } catch (error) {
     console.error(error)
    }
 }
 