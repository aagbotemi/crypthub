import React, { useEffect, useState } from 'react'
import HeroImg from "./../assets/images/hero-image.png"

const Home = () => {
    

    return (
        <section className="home">
            <article className="hero">
                <div className="leftHandSide">
                    <h1>Join the best cryptocurrency platform</h1>
                    <p>The global crypto market cap is <span className="bold">$3,000</span>, a <span className="green bold">2.234%</span> increase over the last day.</p>
                    <p>The total crypto market volume over the last 24 hours is <span className="bold">$546</span>, which makes a <span className="green bold">28.15%</span> increase. The total volume in DeFi is currently <span className="bold">$18.42B</span>, <span className="bold">13.00%</span> of the total crypto market 24-hour volume. The volume of all stable coins is now <span className="bold">$109.59B</span>, which is <span className="bold">77.36%</span> of the total crypto market 24-hour volume.</p>
                </div>
                <div className="rightHandSide">
                    <img src={HeroImg} alt="hero" />
                </div>
            </article>
        
            <article className="globalStats">
                <h1>Global Stats</h1>
                <div className="globalStatsGrid">
                    <div className="grid-item">
                        <span className="stat-title">Total Cryptocurrencies</span>
                        <div className="stat-content">788</div>
                    </div>
                    <div className="grid-item">
                        <span className="stat-title">Total Exchanges</span>
                        <div className="stat-content">798</div>
                    </div>
                    <div className="grid-item">
                        <span className="stat-title">Total Market Cap</span>
                        <div className="stat-content">6767</div>
                    </div>
                    <div className="grid-item">
                        <span className="stat-title">Total 24h Volume</span>
                        <div className="stat-content">789</div>
                    </div>
                    <div className="grid-item">
                        <span className="stat-title">Total Markets</span>
                        <div className="stat-content">898</div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Home