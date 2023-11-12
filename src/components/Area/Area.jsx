import React, { useContext, useState } from 'react'
import {  useQuery } from 'react-query'
import { MealsContext } from '../MealsContext/MealsContext'
import { useEffect } from 'react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Area() {
  let {getAllData}=useContext(MealsContext)
  const [meals, setMeals] = useState([])
 async function fetchMeals()
  {
    let meals=await getAllData("a")
    setMeals(meals.data.meals)
    
    
  }
  console.log(meals);
  useEffect(() => {
    fetchMeals()
  
    
  }, [])
  
 
  
  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Area</title>
               
            </Helmet>
  {
    
    meals.length !== 0 ?<div className="row">
      
      {
        meals?.map((meal,index)=><div key={index} className="col-md-3 p-3">
        <Link to={`/area/${meal.strArea}`}>
        
        <div className="inner text-center text-white">
        <i class="fa-solid fa-house fa-4x"></i>
          <h3 className='my-3'>
            {meal.strArea}
          </h3>
          
        </div>
        </Link>
      </div>)
      }
    

    </div>
    
    :<Loading/>
  }
  
  
  </>
}
