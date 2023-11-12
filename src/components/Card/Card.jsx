import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
export default function Card({meal}) {
  
  return <>
  
  <div className={` card  col-md-3 container bg-black py-3 `} >
   <Link to={`/${meal.idMeal}`}>
   <div className={`${style.card} card-inner rounded position-relative `}>
   <img src={meal.strMealThumb}  className='w-100'/>
    <div className={`${style.card_layer}  card-layer position-absolute bg-black bg-opacity-50 d-flex align-items-center  w-100`}>
    <h3 className='text-white'>
     { meal.strMeal }
    </h3>
    </div>
 
   </div>
   </Link>
   
   </div>
  
   
  
  </>
   
  
}
