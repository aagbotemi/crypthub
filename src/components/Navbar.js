import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/blockchain.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    // fixed navbar
    const handleScroll = () => {
        const offset=window.scrollY;
        offset > 0
            ? setScrolled(true)
            : setScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
    })

    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    
    return (
        <div className={navbarClasses.join(" ")}>
            <img src={Logo} alt="logo" width="40px" /> <span>BidCoin</span>
        </div>
    )
}

export default Navbar
