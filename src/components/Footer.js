import React from 'react'
import { FaBook, FaDollarSign, FaEnvelope, FaEnvelopeOpenText, FaGithubAlt, FaGlobe, FaGlobeAmericas, FaInstagram, FaLaptopCode, FaLinkedin, FaMapMarker, FaPhone, FaPlayCircle, FaStar, FaTextWidth, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                <h1 className="footer__title">Emirates Paints</h1>
                <span className="footer__subtitle">Explore our complete range of paints and colors and start painting today</span>
            </div>
            
            <ul className="footer__links">
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#testimonial" className="footer__link">Review</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
        
            <div className="footer__socials">
                <a href="" target="_blank" className="footer__social">
                <FaLinkedin/>
                </a>

                <a href="" target="_blank" className="footer__social">
                <FaInstagram/>
                </a>

                <a href="" target="_blank" className="footer__social">
                    <FaTwitter/>
                </a>
            </div>
        </div>

            <p className="footer__copy">&#169; Emiratespaints. All right reserved</p>
        </div>
    </footer>
        </div>
    )
}

export default Footer
