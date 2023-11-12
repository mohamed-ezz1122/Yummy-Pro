import React, { useRef } from 'react'
import style from "./Saiedbar.module.css"
import { NavLink } from 'react-router-dom'

export default function Saiedbar() {
let sidebar=useRef(null)
let innerSaidebar=useRef(null)
let icons=useRef(null)

function checkNavStautes(){
let left=window.getComputedStyle(sidebar.current).getPropertyValue('left')
console.log(left);

  if(left=="0px"){


    closeNav()
  }else{
    openNav()
  }
}
function closeNav(){
let width= innerSaidebar.current.offsetWidth;
  sidebar.current.style.left=`-${width}px`
  icons.current.classList.replace("fa-xmark" ,'fa-bars')
}
function openNav(){
  sidebar.current.style.left="0px"
  icons.current.classList.replace( 'fa-bars',"fa-xmark")

}


  return <>
  <nav ref={sidebar} className={`${style.nav} bg-white p-0 vh-100 position-fixed  z-3 d-flex`}>
  <div ref={innerSaidebar} className={`${style.asiedLift} asiedLift  bg-black vh-100 overflow-hidden d-flex flex-column align-items-start justify-content-between`}>
    <ul className='pt-5 w-100'>
      <li onClick={closeNav} >
      <NavLink to={'/'} className={`${style.nav_link }  list-unstyled text-white mb-2 ps-2 w-100` }>
      Home
      </NavLink>
      </li>
      <li onClick={closeNav} >
      <NavLink to={'/search'}className={`${style.nav_link }  list-unstyled text-white mb-2 ps-2` } >
      Search
      </NavLink>
      </li>
      <li onClick={closeNav} >
      <NavLink to={'/categories'} className={`${style.nav_link }  list-unstyled text-white mb-2 ps-2` }>
      Categories
      </NavLink>
      </li>
      <li onClick={closeNav} >
      
      <NavLink to={'/area'} className={`${style.nav_link }  list-unstyled text-white mb-2 ps-2` }>
      Area
      </NavLink>
      </li>
      <li onClick={closeNav} >
      
      <NavLink to={'/ingredients'} className={`${style.nav_link }  list-unstyled text-white mb-2 ps-2` }>
      Ingredients
      </NavLink>
      </li>
      <li onClick={closeNav} >
      
      <NavLink to={'/contact'} className={`${style.nav_link }  list-unstyled text-white mb-2 ps-2` }>
      Contact Us
      </NavLink>
      </li>
    </ul>
    <div className="navFooter text-white ms-4  pointer">
      <i className='fa-brands fa-facebook-f pointer'></i>
      <i className='fa-brands fa-twitter mx-2 pointer'></i>
      <i className="fa-solid fa-globe"></i>
      <p className=''>
      Copyright Â© 2019 All Rights
      Reserved.
      </p>
    </div>

  </div>

  <div className={`${style.asiedRight}  vh-100  d-flex flex-column align-items-center justify-content-between p-5 px-3`}>
  <i className="fa-regular fa-face-grin-tongue-wink fa-2x "></i>
  <i ref={icons} onClick={()=>checkNavStautes()} className="fa-solid fa-bars fa-2x pointer"></i>
  <div className="d-flex flex-column  ">
  <i className="fa-solid fa-globe mb-2 fa-2"></i>
  <i className="fa-solid fa-share-nodes fa-2"></i>
  </div>
  </div>


  </nav>
  
  
  </>
}
