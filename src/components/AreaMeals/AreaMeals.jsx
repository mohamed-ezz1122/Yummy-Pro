import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import { MealsContext } from '../MealsContext/MealsContext';
import { Helmet } from 'react-helmet';




export default function AreaMeals() {
    let {getCategData}=useContext(MealsContext)
    const [meals, setMeals] = useState([])
    
    let {areaMeals}=useParams()
    
    async function fetchData()
    {
    let meals=await getCategData('a',areaMeals)
    console.log(meals.data.meals);
    setMeals(meals.data.meals)
    }
    
    
    
    useEffect(() => {
      fetchData()
    }, [])
    
    
    
    
    
      return <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>{areaMeals}</title>
               
            </Helmet>
       
       <div className="row">
        { 
        meals.length!==0?
        meals?.map((meal,index)=> <Card key={index} meal={meal}/>)
        :<Loading/>
        }
       </div>
       
      
      
      
      
      </>
    }
    