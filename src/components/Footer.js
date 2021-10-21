import React from 'react'
import Logo from '../assets/images/logo.png'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="">
            <div>
                <div>
                    <img src={Logo} width="20px" alt="crypthub logo" /> <span className="">Crypthub</span>
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
            <div>
            Designed & Developed by <a href="https://github.com/aagbotemi" target="_blank" rel="noopener noreferrer">Abiodun Awoyemi</a>
            </div>
            Copyright &copy; {new Date().getFullYear()} Crypthub
        </footer>
    )
}

export default Footer