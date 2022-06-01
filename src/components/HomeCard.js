import React, { useEffect, useState } from 'react'
import livingroom from '../photos/livingroom.jpg'
import bedroom from '../photos/bedroom.jpg'
import dining from '../photos/dining.jpg'
import kitchen from '../photos/kitchen.jpg'
import bathroom from '../photos/bathroom.jpg'
import exterior from '../photos/exterior.jpg'
import commercial from '../photos/commercial.jpg'
import FrontDoor from '../photos/FrontDoor.jpg'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaCamera, FaPhotoVideo } from 'react-icons/fa'
import './color.css'
import ScaleLoader from "react-spinners/ScaleLoader"

const HomeCard = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
       setIsLoading(true)
       setTimeout(() => {
           setIsLoading(false)
       }, 5000)
    }, [])

    // useEffect(()=>{
    //     fetch('/mypost',{
    //         headers:{
    //             "Authorization":"Bearer "+localStorage.getItem("jwt")
    //         }
    //     }).then(res=>res.json())
    //     .then(result=>{
    //         console.log(result)
    //         setPics(result.mypost)
    //     })
    //  },[])
    
    return (
        <div className="homepic">
           
                <div className="cardhome">
                <Navbar/> 
                    <div style={{padding:"40px"}}>
                <h1 >Select a Photo to Virtually Paint</h1>
                <h3>Explore Our Paintable Photos</h3>
                </div>
                {isLoading ? (
                    <div className="spinner" style={{marginLeft: "500px"}}>
                <ScaleLoader size={40} color='#C213FE' isLoading={isLoading} />
                </div>
            ) : (
            <div className="services__container container grid ">
                <Link to="livingroom" className="card home-card-color">
                    <img src={livingroom} alt=""/>
                <div>
                    <h3>Living Room</h3>
                </div>
                </Link>
    
                <Link to="bedroom" className="card home-card-color">
                    <img src={bedroom } alt=""/>
                <div>
                    <h3>Bedroom</h3>
                </div>
                </Link>
    
                <Link to="dining" className="card home-card-color">
                    <img src={dining} alt=""/>
                <div>
                    <h3>Dining Room</h3>
                </div>
                </Link>
    
                <Link to="kitchen" className="card home-card-color">
                    <img src={kitchen} alt=""/>
                <div>
                    <h3>Kitchen</h3>
                </div>
                </Link>
    
                <Link to="bathroom" className="card home-card-color">
                    <img src={bathroom} alt=""/>
                <div>
                    <h3>Bathroom</h3>
                </div>
                </Link>
    
                <Link to="exterior" className="card home-card-color">
                    <img src={exterior} alt=""/>
                <div>
                    <h3>Exterior</h3>
                </div>
                </Link>
    
                <Link to="commercial" className="card home-card-color">
                    <img src={commercial} alt=""/>
                <div>
                    <h3>Commercial</h3>
                </div>
                </Link>
    
                <Link to="door" className="card home-card-color">
                    <img src={FrontDoor} alt=""/>
                <div>
                    <h3>Front Door</h3>
                </div>
                </Link>
               
                
                </div>
                )}
                <br/>
                <h1 className="or">--------OR--------</h1>
                <div className="image-upload">
                  <FaCamera size={40} className="camera"/>
                  <div className="textmsg">
                      <h3>Upload Your Own Photo</h3>
                      <p>
                          Make your project come alive with Link photo of your own home
                      </p>
                      
                  </div>
                  
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
                <br/>
                
                </div>
                
            
            
            </div>  
    )
}

export default HomeCard
