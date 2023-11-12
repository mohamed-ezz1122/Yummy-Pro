import React, { useState } from 'react'
import style from './Search.module.css'
import Card from '../Card/Card';

import axios from 'axios'
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
export default function Search() {
const [meals, setMeals] = useState([])
async function getData(type,term){
  let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`)
  if(data.meals !== null)
  {
    setMeals(data.meals)
  }
  else
  {
    window.alert('There is no meal by that name')
  }
  
}



  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Search</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  
  <div className={`${style.main} row pt-5`}>
    <div className="col-md-6">
      <input type="text" className='form-control bg-black' placeholder='Enter The Meals Name' 
      
      onChange={(e)=>{
        // console.log();
        getData('s',e.target.value)
      }}
      />
    </div>
    <div className="col-md-6">
      <input type="text" className='form-control bg-black' maxLength={1} placeholder='Enter The first litter for Meals Name'
       onChange={(e)=>{
        // console.log();
        getData('f',e.target.value)
      }}
      />
    </div>
  </div>
  <div className="row mt-5">

{meals.length !==0?meals?.map((meal,index)=> <Card key={index} meal={meal} />):<Loading/>}

  </div>
  
  </>
}
