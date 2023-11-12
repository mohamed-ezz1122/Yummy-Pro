
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import Search from './components/Search/Search'
import Area from './components/Area/Area'
import Ingredients from './components/Ingredients/Ingredients'
import Contact from './components/Contact/Contact'
import Categories from './components/Categories/Categories'
import CategType from './components/CategType/CategType'
import MealsContextProvider from './components/MealsContext/MealsContext'
import IngredType from './components/IngredType/IngredType'
import AreaMeals from './components/AreaMeals/AreaMeals'


 




function App() {
let routers=createBrowserRouter([
  {
  path:"/", element:<Layout/>,
  children:[,
    {index:true, element: <Home/>},
    {path:'/', element: <Home/>},
    {path:'/search', element: <Search/> },
    {path:'/categories', element: <Categories/>},
    {path:'/area', element: <Area/>},
    {path:'/area/:areaMeals', element: <AreaMeals/>},
    {path:'/ingredients/:nameMeals', element: <IngredType/>},
    {path:'/ingredients', element: <Ingredients/>},
    {path:'/contact', element: <Contact/>},
    {path:'/categories/:categType', element: <CategType/>},
    {path:'/:id', element: <Details/>},
    // {path: '*', element: <Details/>},
  ]
  }
])

  return <>
  
 <MealsContextProvider>
  <RouterProvider router={routers}></RouterProvider>
  </MealsContextProvider>
  
  
  
  
  </>
}

export default App
