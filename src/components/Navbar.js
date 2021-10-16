import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import { AiOutlineClose } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: <BiHome />
  },
  {
    title: "Cryptocurrencies",
    url: "/cryptocurrencies",
    icon: <BsCurrencyDollar />
  },
  {
    title: "Exchanges",
    url: "/exchanges",
    icon: <FaExchangeAlt />
  },
  {
    title: "Markets",
    url: "/markets",
    icon: <SiMarketo />
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
    
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="logo" width="22px" /> Crypthub
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {active
          ? <AiOutlineClose color="white" className="close" size="28px" />
          : <HiOutlineMenuAlt1 color="white" className="open" size="32px" />}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <Link key={index} to={item.url} className="nav-links" onClick={() => setActive(!active)}>
              <li>
                <span className="nav-icon">
                  {item.icon}
                </span>
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar
