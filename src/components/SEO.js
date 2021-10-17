import React from 'react'
import {Helmet} from 'react-helmet'
import Logo from '../assets/images/logo.svg';
import Favicon from '../assets/images/logo.svg';

const SEO = ({title}) => {
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Crypthub`}>
            <meta name="description" content="Crypthub is a platform where you get realtime information about cryptocurrencies, prices, charts, markets, updates and more." />
            <meta name="author" content="Abiodun Awoyemi" />
            <meta name="keywords" content="crypto, cryptocurrency price, bitcoin, btc, eth, ethereum, cryptocurrency exchanges, crypto total volume, crypto total market cap &amp; crypto markets" />
            <meta name="image" content={Logo} />
            <link rel="shortcut icon" href={Favicon}/>
        </Helmet>
    )
}

export default SEO