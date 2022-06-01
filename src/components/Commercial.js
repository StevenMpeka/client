import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {commercial } from './Data'
import Navbar from './Navbar'

const Commercial = () => {
    const [photos,setPhotos] = useState(commercial)
    return (
        <div className="homepic">
            <div className="cardhome">
            <Navbar/>
            <br/>
            <Link to="/" className="back-home"><FaAngleLeft size={20}/>Explore Different Photos</Link> 
            <div style={{padding:"40px"}}>
            <h1 >Select a Photo to Virtually Paint</h1>
            <h3>COMMERCIAL</h3>
            </div>
        <div className="services__container container grid">
            {photos.map(item => {
                return(
             <Link to="/color" className="card home-card-color">
                <img src={item.photo} alt="img"/>
            </Link>
            )})}
        </div>
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
       
        </div>
    )
}

export default Commercial
