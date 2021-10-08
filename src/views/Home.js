import React, { useEffect, useState } from 'react'
import HeroImg from "./../assets/images/hero-image.png"

const Home = () => {


    return (
        <section className="home">
            <article className="hero">
                <div className="leftHandSide">
                    <h1>Join the best cryptocurrency platform</h1>
                    <p>The global crypto market cap is <span className="bold">$2.28T</span>, a <span className="green bold">2.38%</span> increase over the last day.</p>
                    <p>The total crypto market volume over the last 24 hours is <span className="bold">$141.65B</span>, which makes a <span className="green bold">28.15%</span> increase. The total volume in DeFi is currently <span className="bold">$18.42B</span>, <span className="bold">13.00%</span> of the total crypto market 24-hour volume. The volume of all stable coins is now <span className="bold">$109.59B</span>, which is <span className="bold">77.36%</span> of the total crypto market 24-hour volume.</p>
                </div>
                <div className="rightHandSide">
                    <img src={HeroImg} alt="hero" />
                </div>

            </article>
        </section>
    )
}

export default Home