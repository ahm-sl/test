import React, { Component } from 'react'

import Foter from '../Fotter/Foter';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default class Project extends Component {
  render() {




    
    return <>
    <Navbar/>
   <Outlet/>
    <Foter/>
    
    </>
      
    
  }
}

