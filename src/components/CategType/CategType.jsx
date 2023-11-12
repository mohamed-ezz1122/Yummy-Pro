import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import { MealsContext } from '../MealsContext/MealsContext';
import { Helmet } from 'react-helmet';


export default function CategType() {
  let {getCategData}=useContext(MealsContext)
const [meals, setMeals] = useState([])

let {categType}=useParams()

async function fetchData()
{
let meals=await getCategData('c',categType)

setMeals(meals.data.meals)
}



useEffect(() => {
  fetchData()
}, [])





  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>{categType}</title>
                
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
