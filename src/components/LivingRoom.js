import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {livingRoom} from './Data'
import Navbar from './Navbar'
import ScaleLoader from "react-spinners/ScaleLoader"

const LivingRoom = () => {
    const [photos,setPhotos] = useState(livingRoom)
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
            <h3>LIVING ROOM</h3>
            </div>
            {isLoading ? (
                <div className="spinner" style={{marginLeft: "500px"}}>
                <ScaleLoader size={40} color='#C213FE' isLoading={isLoading}/>
                </div>
            ) : (
        <div className="services__container container grid">
            {photos.map(item => {
                return(
             <Link to="/color" className="card home-card-color">
                <img src={item.photo} alt="img"/>
            </Link>
            )})}
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
            <br/>
            <br/>
        </div>
       
        </div>
    )
}

export default LivingRoom
