import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
    
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container bg-warning p-3 ">
    <Link className="navbar-brand" >start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active px-2" aria-current="page" to="Home">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Aboyt">portofolue</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="go">CONATCT</Link>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
    
    </>
      



        
      
    
  }
}
