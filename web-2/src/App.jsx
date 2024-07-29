import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'

import About from './components/About/About'
import Layout from "./components/Layout/Layout"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio"

import Home from "./components/Home/Home"
import NoFound from "./components/NoFound/NoFound"


function App() {

 let x =  createBrowserRouter([
    { path: '', element:<Layout/>, 
      children:[
      {path:'home', element:<Home/>},
    {path:'about' ,element:<About/>},
  {path:'portfolio' , element:<Portfolio/>},
  {path:'contact' , element:<Contact/>},





{path:'*' , element:<NoFound/>}

], },
]);
 

 

  return (

    <>
    
    <RouterProvider router={x}></RouterProvider>
    
    </>
  )
}

export default App
