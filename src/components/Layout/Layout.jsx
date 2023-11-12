import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Card/Card'
import Saiedbar from '../Saiedbar/Saiedbar'


export default function Layout() {
  return <>
 
    <Saiedbar/>
    <div className="container">
    <Outlet/>
    </div>
  </>
  
    
  
  
}
