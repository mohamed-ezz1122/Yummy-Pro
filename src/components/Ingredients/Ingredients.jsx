import React, { useContext, useEffect, useState } from 'react'
import { MealsContext } from '../MealsContext/MealsContext'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Ingredients() {
  let {getAllData} =useContext(MealsContext)
  const [meals, setMeals] = useState([])
async function fetchData(x)
{
let meals=await getAllData(x)
console.log(meals.data.meals[0]);
setMeals(meals.data.meals)
}
useEffect(() => {
  fetchData('i')
}, [])

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Ingredients</title>
               
            </Helmet>
  
  {
    meals.length !==0?
    
    <div className="row">
            {meals.map((meal,index)=> <div key={index} className="col-md-4 p-3">
            <Link to={`/ingredients/${meal.strIngredient}`}>
        <div className="inner text-center text-white">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
         <h4 className='my-3'>
          {
            meal?.strIngredient
          }
         </h4>
         <p>
            {
              meal?.strDescription?.slice(0,200)
            }
          </p>
        </div>
        </Link>
      </div>)}
     
    </div>
    
    :<Loading/>
  }
  
  
  </>
}
