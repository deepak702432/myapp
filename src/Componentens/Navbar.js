import React from 'react'
import {Link,Outlet} from 'react-router-dom';
import './navbar.css'


export default function Navbar() {
  return (
<>

<ul className="nav navbar navbar-expand-lg bg-body-primary container-fluid justify-content-center navbar1">

    
  <li className="nav-item">
    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
  </li>
  <li className="nav-item">
    <Link  to ="/About" className="nav-link" href="#">About</Link>
  </li>
  <li className="nav-item">
    <Link  to="/course" className="nav-link" href="#">Course</Link>
  </li>
  <li className="nav-item">
    <Link  to="/Affilation" className="nav-link" href="#">Affilation</Link>
  </li>

  <li className="nav-item">
    <Link   to="/Contact" className="nav-link" href="#">Contact</Link>
  </li>

  <li className="nav-item">
    <Link  to ="/Library" className="nav-link" href="#">Library</Link>
  </li>


</ul>

<Outlet/>

</>
  )
}
