import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet';


export default function Home() {
const [meals, setMeals] = useState([])
async function getData()
{
  let {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  
  setMeals(data.meals)
}


useEffect(() => {
  getData()

  
}, [])



  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Home </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <div className="row ">
{
 meals.length? meals?.map((mealInfo,index)=> <Card key={index} meal={mealInfo} />) :
 <Loading/>
}

  </div>
  
  
  
  </>
}
