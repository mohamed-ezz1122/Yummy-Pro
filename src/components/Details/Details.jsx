import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading'

import axios from 'axios';
import { object } from 'yup';
import { Helmet } from 'react-helmet';


export default function Details() {
const [details, setDetails] = useState([])
  let {id}=useParams()
 async function getData()
  {
let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
// console.log(data.meals[0]);
return data.meals[0]
  }




 async function getRecipeReady()
  {
    let detailsObject=await getData()
    // console.log(detailsObject);
    detailsObject.ingredients=[]
    const detailsMap = new Map(Object.entries(detailsObject))
    
    
  for(let i=0;i<detailsMap.size;i++)  {
  if(detailsMap.get(`strIngredient${i}`)){
    detailsObject.ingredients.push(
      `${detailsMap.get(`strMeasure${i}`)} ${detailsMap.get(`strIngredient${i}`)}`
    )
  }
  
  }
 
 setDetails(detailsObject)

  }



useEffect(() => {
  getRecipeReady()
}, [])



  return  <>
  {details.length!==0? <div className="row py-5">
  <Helmet>
                <meta charSet="utf-8" />
                <title>{details.strMeal}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="col-md-4">
      <img src={details.strMealThumb} className="w-100 rounded-4" />
      <h3 className="text-white">{details.strMeal}</h3>
    </div>

    <div className="col-md-8">
      <div className="inner text-white ">
        <h2>Instructions</h2>
        <p>
          {details?.strInstructions}
        </p>
        <h4>
        <span className='me-2'>Area :</span>{details?.strArea}
        </h4>
        <h4>
        <span className='me-2'>Category :</span>{details?.strCategory}
        </h4>
        <div className="my-3">
        <h4>
        Recipes :
        </h4>
        {
         details.ingredients&& details?.ingredients?.map((ingredient,index)=> 
          <span className="btn btn-warning px-2 py-1 rounded-1 text-white me-2 mt-4" key={index}>
          {ingredient}
        </span>)
        }
        
       
        </div>
        <div className="my-3">
          {
            details?.strTags? <>
            
            <h4>Tags :</h4> {details.strTags.split(',').map((item,index)=> <span key={index} className="btn btn-info text-white px-2 py-1 rounded-1 me-2">  {item}</span>)}
            </>
            
        :""
          
          }
         
          
         
        </div>
        <div className="buttons-groupe mt-3">
          <a href={details?.strSource} className="btn btn-outline-primary me-3">
            Source
          </a>
          <a href={details?.strYoutube} className="btn btn-outline-danger">
            Youtube
          </a>
             
          </div>
        </div>
      </div>
    </div>
  : <Loading/>}
 
  
</>
}
