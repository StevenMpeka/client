import React, { useEffect, useState } from 'react'
import './color.css'
import browseall from '../photos/browseall.jpg'
import collections from '../photos/collections.jpg'
import search from '../photos/search.jpg'
import matchcolor from '../photos/matchcolor.jpg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaAngleLeft } from 'react-icons/fa'
import ScaleLoader from "react-spinners/ScaleLoader"

const Colors = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
     }, [])
    return (
        <div className="homepic">
            <div className="cardhome">
            <Navbar/>
            <br/>
            <Link to="/" className="back-home"><FaAngleLeft size={20}/>Explore Different Photos</Link>
            <div style={{padding:"40px"}}>
            <h1 >Select a Photo to Virtually Paint</h1>
            <h3>Explore Our Paintable Photos</h3>
            </div>
            {isLoading ? (
                <div className="spinner" style={{marginLeft: "500px"}}>
                <ScaleLoader size={40} color='#C213FE' isLoading={isLoading}/>
                </div>
            ) : (
        <div className="services__container container grid">
            <Link to="allcolors" className="card home-card-color">
                <img src={browseall} alt=""/>
            <div>
                <h2>Browse All Colors</h2>
            </div>
            </Link> 

            <div className="card home-card-color">
                <img src={collections} alt=""/>
            <div>
                <h2>View Curated Palettes</h2>
            </div>
            </div> 

            <Link to="upload" className="card home-card-color">
                <img src={matchcolor} alt=""/>
            <div>
                <h2>Match Colors from a Photo</h2>
            </div>
            </Link> 

            <div className="card home-card-color">
                <img src={search} alt=""/>
            <div>
                <h2>Search by Color Name</h2>
            </div>
            
            </div> 
            
            </div>
            )}
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

export default Colors
