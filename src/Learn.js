import React from 'react'
import { FaLongArrowAltLeft, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './learn.css'
import './App.css'
import image from './photos/image.jpg'
import image1 from './photos/image1.jpg'
import image2 from './photos/image2.jpg'
import image3 from './photos/image3.jpg'

const Learn = () => {
    return (
        <div className="container">
        <div className="sub-nav">
          <h1 className="section__title">
            What is your today's outfit?
          </h1>
          <br/>
          <div className="search-input">
            <FaSearch size={20} className="search-icon"/>
            <input 
            type="search" 
            className="search-input"
            placeholder="Search for your query"
            />
          </div>
        </div>
        <section className="services section">
        <div className="services__container container grid">
            <div className="card home-card">
            <div className="price-content">
           
            </div>
            <div>
            <div className="banner">
              <h2 className="services__title ">Men</h2><br/>
              <Link to="" className="banner-btn">Click Here</Link>
              </div>
            </div>
            {/* <p className="banner">
                            Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                    </p> */}
               </div>

               <div className="card home-card">
                   <div className="price-content">
           
            </div>
            <div>
              <div className="banner">
              <h2 className="services__title ">Women</h2><br/>
              <Link to="" className="banner-btn">Click Here</Link>
              </div>
            
            </div>
            {/* <p className="banner">
                            Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                    </p> */}
               </div>

               <div className="card home-card">
                <div className="price-content">
           
            </div>
            <div>
            <div className="banner">
              <h2 className="services__title ">Kids</h2><br/>
              <Link to="" className="banner-btn">Click Here</Link>
              </div>
            </div>
            {/* <p className="banner">
                            Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                    </p> */}
               </div>
           </div>
           <div className="recom-products">
             <div className="recom-title">
             <h1>Recommended</h1>
             <span className="view-title">View All</span>
             </div><br/>
             <div className="services__container container grid">
            <div className="card-product">
              <div className="image-div">
              <img src={image1} alt=""/>
              </div><br/>
              <div className="descript-product">
                <h2 className="services__title">Price: Tsh 25,000</h2>
                <h4>Girl's sandal</h4><br/>
                <p className="about__description">
                            Quality sandals for girls, get your today to get
                            a 50% discount
                    </p>
              </div>
               </div>

               <div className="card-product">
               <div className="image-div">
              <img src={image2} alt=""/>
              </div><br/>
              <div className="descript-product">
                <h6 className="services__title">Price: Tsh 30,000</h6>
                <h4>Men's Sandal</h4><br/>
                <p className="about__description">
                Quality sandals for Men, get your today to get
                            a 50% discount
                    </p>
              </div>
               </div>

               <div className="card-product">
               <div className="image-div">
              <img src={image3} alt=""/>
              </div><br/>
              <div className="descript-product">
                <h6 className="services__title">Price: Tsh 17,000</h6>
                <h4>Kid's Sandal</h4><br/>
                <p className="about__description">
                Quality sandals for kids, get your today to get
                            a 50% discount
                    </p>
              </div>
               </div>
               </div>
           </div>
        </section>

       
        </div>
    )
}

export default Learn
