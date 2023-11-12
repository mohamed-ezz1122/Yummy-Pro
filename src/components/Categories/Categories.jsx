import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image from "../../assets/Images/photo_5_2023-05-15_00-31-15.jpg";
import style from './Categories.module.css'
import Loading from '../Loading/Loading'
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Categories() {
const [categories, setCategories] = useState([])


async function getData()
{
  let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  console.log();
  setCategories(data.categories)
}



useEffect(() => {
  getData()
}, [])
// console.log(categories[0].strCategoryDescription.slice(0,100)  );

  
  return <>
  
  {categories?<div className="row">
  <Helmet>
                <meta charSet="utf-8" />
                <title>Categories</title>
                
            </Helmet>
    {
      categories?.map((categore,index)=> <div key={index} className="col-md-3 p-3">
      
      <Link to={`/categories/${categore.strCategory}`}>
      <div className={`${style.inner} inner rounded-2 shadow position-relative overflow-hidden`} > 
      <img src={categore.strCategoryThumb} className='w-100' alt="" />
      <div  className={`${style.inner_layer} inner-layer position-absolute text-center bg-white bg-opacity-50 z-3 p-2`}>
      <h3>
        {categore.strCategory}
      </h3>
      <p>
        {
          categore?.strCategoryDescription?.slice(0,100)
          
        }
      </p>

      </div>
      </div>
      </Link>
     
    </div>
      )


    }
  </div>
  :<Loading/>}
  
  
  </>
}
