import React from 'react'
import Logo from '../assets/images/logo.png'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="footer-upper">
                <div className="company-details">
                    <div className="company-details-brand">
                        <img src={Logo} width="18px" alt="crypthub logo" />
                        <span className="">Crypthub</span>
                    </div>
                    <p>Your number one platform to get real-time update about cryptocurrencies</p>
                </div>
                <div className="social-icons">
                    <h2>
                        Socials
                    </h2>
                    <span><AiOutlineInstagram size="25px" /></span>
                    <span><AiOutlineTwitter size="25px" /></span>
                    <span><FaLinkedin size="25px" /></span>
                    <span><FaFacebook size="25px" /></span>
                </div>
            </div>
            
            <div className="footer-base">
                
                <div className="developer-details">
                    Designed &amp; Developed by <a href="https://github.com/aagbotemi" target="_blank" rel="noopener noreferrer">Abiodun Awoyemi</a>
                </div>
                <div className="copyright">
                    Copyright &copy; {new Date().getFullYear()} Crypthub
                </div>
            </div>
        </footer>
    )
}

export default Footer