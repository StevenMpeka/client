import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {bedRoom} from './Data'
import Navbar from './Navbar'
import ScaleLoader from "react-spinners/ScaleLoader"

const BedRoom = () => {
    const [photo,setPhoto] = useState(bedRoom)
    const [fillColors, setFillColors] = useState(Array(22).fill('white'))
    const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)

  }

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
      <h3>BEDROOM</h3>
      </div>
      {isLoading ? (
                <div className="spinner" style={{marginLeft: "500px"}}>
                <ScaleLoader size={40} color='#C213FE' isLoading={isLoading}/>
                </div>
            ) : (
        <div className="services__container container grid">
            {photo.map(item => {
                return(
             <Link to="color" className="card home-card-color">
                <img src={item.photo} alt=""
                onClick={() => onFillColor(Array.length)}
                />
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
        </div>
        </div>
    )
}

export default BedRoom
