import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './components/About/About';
import Categtoy from './components/Categroy/Categroy'
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Start from './components/Start/Start';

const rooter= createBrowserRouter([


{path:`/`, element:<Project/>,children:[
  


{path:`/go`, element:<Categtoy />},
{path:``, element:<Start />},
{path:`/Aboyt`, element:<About />},
{path:`/Home`, element:<Home/>}



  
]}







]
  );
export default class App extends Component {



  render() {
    return <>
    
  
    <RouterProvider router={rooter}  />
    
    </>
      

      
        
    
  }
}
