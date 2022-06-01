import React from 'react'
import { Link } from 'react-router-dom'
import './color.css'

const Navbar = () => {
    return (
        <div className="cardnav">
                <nav className="nav ">
                    <div className="nav__menu">
                 <ul className="nav__list navlistcolor">
                     <li className="nav__item">
                         <Link to="" className="navcolor">Select Photo</Link>
                         </li>
                     <li className="nav__item">
                     <Link to="" className="navcolor" >Select Colors</Link>
                         </li>
                     <li className="nav__item">
                     <Link to="" className="navcolor">Visualize Room</Link>
                         </li>
                     <li className="nav__item">
                     <Link to="" className="navcolor" >Order Paint</Link>
                         </li>
                 </ul>
                 </div>
                </nav>
                </div>
    )
}

export default Navbar
