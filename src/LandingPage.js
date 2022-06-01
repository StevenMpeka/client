import { GroupAdd } from '@material-ui/icons'
import React from 'react'
import { FaBook, FaDollarSign, FaEnvelope, FaEnvelopeOpenText, FaGithubAlt, FaGlobe, FaGlobeAmericas, FaInstagram, FaLaptopCode, FaLinkedin, FaMapMarker, FaPhone, FaPlayCircle, FaStar, FaTextWidth, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './landingpage.css'
import image from './photos/image.jpg'

const LandingPage = () => {
    return (
    <div className="container">
    <div className="main">
    <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="overlay">
                <div className="home__content grid">
                    <div className="home__social">
                       
                    </div>
                     {/* <div className="home__img">
                        <img src="./Photos/pic-9.jpg"  className="home__blob-img"/>
                    </div>  */}

                    <div className="host my-2 py-2">
                        <div className="container">
                            <div className="text-center">
                                {/* <h2 className="lg">
                                    Create and host your website with us
                                </h2>
                                <p className="lead my-1">
                                    If you need a really friend then Dog is, remember, a dog is the only thing on the earth that
                                    loves you more than he loves himself and no matter how little money and how few possessions
                                    you own, having a dog makes you rich
                                </p> */}
                                <div className="ban-btn">
                                <Link to="" className="btn btn-outline ">Get Started</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                  
                  
                </div>
                {/* <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name"><h1>Scroll down</h1></span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div> */}
            </div>
            </div>
        </section>

        <section className="about section" id="about">
            <h2 className="section__title">About Us</h2>
            <span className="section__subtitle">Our introduction</span>
            {/* <p className="about__description container">
            Dog training, with extensive knowledge and years
                        of experience in both for security and normal behaviour which will
                        copy with normal human being and also we advice kind of food required
                        for better growth and perfect health of your Dog.
            </p> */}
            <div className="about__container container grid">
                {/* <img src={pic8} alt="" className="about__img"/> */}

                <div className="about__data">
                    <p className="about__description">
                        Dog training, with extensive knowledge and years
                        of experience in both for security and normal behaviour which will
                        copy with normal human being and also we advice kind of food required
                        for better growth and perfect health of your Dog.
                    </p>

                    <div className="about__info">
                    <div>
                            <span className="about__info-title">07+</span>
                            <span className="about__info-name">Years <br/> experience</span>
                        </div>

                        <div>
                            <span className="about__info-title">100+</span>
                            <span className="about__info-name">Completed Dog<br/> Training</span>
                        </div>

                        <div>
                            <span className="about__info-title">50+</span>
                            <span className="about__info-name">Exprienced <br/> workers</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a href="" className="button button--flex">
                           More Details<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
                </div>
        </section>

        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What we Offer</span>

            <div className="services__container container grid">
            <div className="card home-card">
            <div className="price-content">
            <FaGlobe size={40}/>
            </div>
            <div>
            <h2 className="services__title">Web Development</h2>
            </div>
            <p className="about__description">
                            Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                    </p>
               </div>

               <div className="card home-card">
                   <div className="price-content">
            <FaLaptopCode size={40}/>
            </div>
            <div>
            <h2 className="services__title">Mobile Applications</h2>
            </div>
            <p className="about__description">
                            Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                    </p>
               </div>

               <div className="card home-card">
                <div className="price-content">
            <FaGlobeAmericas size={40}/>
            </div>
            <div>
            <h2 className="services__title">Marketing & SEO</h2>
            </div>
            <p className="about__description">
                            Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                    </p>
               </div>
           </div>
        </section>

        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project</h2>
                        <p className="project__description">Contact us now and get a 
                            discount of 50% on your new project and get a quality work
                            which will be dellivery in an intended time.
                        </p>
                           <a href="#contact" className="button button--flex button--white">
                               Contact Us
                               <i className="uil uil-message project__icon button__icon"></i>
                           </a>
                    </div>

                    {/* <img src={pic7} alt="" className="project__img"/> */}
                </div>
            </div>
        </section>

        <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container grid ">
                <div className="swiper-wrapper products-center">
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testmonial__header">
                                {/* <img src={pic4} alt="" className="testimonial__img"/> */}

                                <div>
                                    <h3 className="testimonial__name">Joseph Donny</h3>
                                    <span className="testmonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                            </div>
                        </div>

                        <p className="testimonial__description">He give a good support and not only that but also
                            I got impressed with the quality of his work and time management
                            he is really good and I recommend him.
                        </p>
                    </div>

                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testmonial__header">
                                {/* <img src={pic5} alt="" className="testimonial__img"/> */}

                                <div>
                                    <h3 className="testimonial__name">Ester Pius</h3>
                                    <span className="testmonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                            <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                            </div>
                        </div>

                        <p className="testimonial__description">He give a good support and not only that but also
                            I got impressed with the quality of his work and time management
                            he is really good and I recommend him.
                        </p>
                    </div>

                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testmonial__header">
                                {/* <img src={pic6} alt="" className="testimonial__img"/> */}

                                <div>
                                    <h3 className="testimonial__name">Tracy John</h3>
                                    <span className="testmonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                            <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                            </div>
                        </div>

                        <p className="testimonial__description">He give a good support and not only that but also
                            I got impressed with the quality of his work and time management
                            he is really good and I recommend him.
                        </p>
                    </div>

                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testmonial__header">
                                {/* <img src={pic5} alt="" className="testimonial__img"/> */}

                                <div>
                                    <h3 className="testimonial__name">Ester Paul</h3>
                                    <span className="testmonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                            <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                                <FaStar className="testimonial__icon-star"/>
                            </div>
                        </div>

                        <p className="testimonial__description">He give a good support and not only that but also
                            I got impressed with the quality of his work and time management
                            he is really good and I recommend him.
                        </p>
                    </div>
                </div>

                
                <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>

       <section className="services section">
       <h2 className="section__title">Pricing</h2>
        <span className="section__subtitle">Choose subscription</span>
        <div className="services__container container grid">
           <div className=" card home-card">
           <div className="">
            <div className="price-content">
            <FaDollarSign size={40} /><h1 className="price">10</h1>
            </div>
            <br/>
            <div className="bill-content-wrapper">
                <h1 className="services__title">Pay your bills <br /> anywhere, anytime.</h1>
                {/* <p className='bill-info'>
                    Now you can pay different bills with us, all you need to do just register your account and go to your dashboard start paying your billsat anytime and any place you are.
                </p> */}
                <ul className="bill-list">
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Recharge airtime for your calls.</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay  for Electricity bill.</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay for cable bill</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay for results check</span>

                    </li>
                    
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Withdraw your money from bank</span>

                    </li>

                </ul>
                <Link to="/calender" className="button-price button--flex">Subscribe</Link>
            </div>
           </div>
          </div>
           <div className=" card home-card">
           <div className="">
            <div className="price-content">
            <FaDollarSign size={40} /><h1 className="price">50</h1>
            </div>
            <br/>
            <div className="bill-content-wrapper">
                <h1 className="services__title">Pay your bills <br /> anywhere, anytime.</h1>
                {/* <p className='bill-info'>
                    Now you can pay different bills with us, all you need to do just register your account and go to your dashboard start paying your billsat anytime and any place you are.
                </p> */}
                <ul className="bill-list">
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Recharge airtime for your calls.</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay  for Electricity bill.</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay for cable bill</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay for results check</span>

                    </li>
                    
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Withdraw your money from bank</span>

                    </li>

                </ul>
                <Link to="/calender" className="button-price button--flex">Subscribe</Link>
            </div>
               </div>


             
           </div>
           <div className=" card home-card">
           <div className="">
            <div className="price-content">
            <FaDollarSign size={40} /><h1 className="price">99</h1>
            </div>
            <br/>
            <div className="bill-content-wrapper">
                <h1 className="services__title">Pay your bills <br /> anywhere, anytime.</h1>
                {/* <p className='bill-info'>
                    Now you can pay different bills with us, all you need to do just register your account and go to your dashboard start paying your billsat anytime and any place you are.
                </p> */}
                <ul className="bill-list">
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Recharge airtime for your calls.</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay  for Electricity bill.</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay for cable bill</span>

                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Pay for results check</span>

                    </li>
                    
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#D5F5D6" />
                            <path d="M9.60002 14.9251L6.45002 11.7751L5.40002 12.8251L9.60002 17.0251L18.6 8.0251L17.55 6.9751L9.60002 14.9251Z" fill="#008A13" />
                        </svg>
                        <span className="bill-list-content">Withdraw your money from bank</span>

                    </li>

                </ul>
                <Link to="/calender" className="button-price button--flex">Subscribe</Link>
            </div>
               </div>



           </div>
           </div>
       </section>
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Us</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <FaPhone className="contact__icon"/>

                        <div>
                            <h3 className="contact__title">Call Us</h3>
                            <span className="contact__subtitle">+1(612)801-1732</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <FaEnvelope className="contact__icon"/>

                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">admin@fzolutions.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <FaMapMarker className="contact__icon"/>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">5335 N Emerson ave Brooklyn Center, MN 55430</span>
                        </div>
                    </div>
                </div>

                <form  className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label for="" className="contact__label">Name</label>
                            <input type="text" name="name" className="contact__input"/>
                        </div>

                        <div className="contact__content">
                            <label for="" className="contact__label">Email</label>
                            <input type="email"name="email" className="contact__input"/>
                        </div>
                    </div>

                    <div className="contact__content">
                        <label for="" className="contact__label">Message</label>
                      <textarea name="message" id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>

                    <div>
                        <input type="submit" value="Send Message" className="button button--flex"/>
                    </div>
                </form>
            </div>
        </section>
       <Footer/>
        
        </div>
    </div>
    )
}

export default LandingPage
