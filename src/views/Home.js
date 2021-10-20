import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { numFormatter } from '../utils/numFormatter'
import Cryptocurrencies from './Cryptocurrencies'
import { Link } from 'react-router-dom'
import HeroImg from './../assets/images/hero.svg'
import CircularLoading from '../components/CircularLoading'
import Exchanges from './Exchanges'

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats
    const currency = data?.data?.base.sign

    return (
        <section className="home">
            <article className="hero">
                <div className="leftHandSide">
                    <h1>Join the best cryptocurrency platform</h1>
                    <p>The global crypto market cap is <span className="bold">{ currency }{numFormatter(globalStats?.totalMarketCap)}</span>. The total crypto market volume over the last 24 hours is <span className="bold">{ currency }{numFormatter(globalStats?.total24hVolume)}</span>.</p>
                </div>
                <div className="rightHandSide">
                    <img src={HeroImg} alt="hero" />
                </div>
            </article>
        
            <article className="globalStats">
                <h1>Global Stats</h1>
                {isFetching 
                ? <CircularLoading />
                : (
                    <div className="globalStatsGrid">
                        <div className="grid-item">
                            <span className="stat-title">Total Cryptocurrencies</span>
                            <div className="stat-content">{Number(globalStats?.total).toLocaleString("en-US")}</div>
                        </div>
                        <div className="grid-item">
                            <span className="stat-title">Total Exchanges</span>
                            <div className="stat-content">{globalStats?.totalExchanges}</div>
                        </div>
                        <div className="grid-item">
                            <span className="stat-title">Total Market Cap</span>
                            <div className="stat-content">{currency}{numFormatter(globalStats?.totalMarketCap)}</div>
                        </div>
                        <div className="grid-item">
                            <span className="stat-title">Total 24h Volume</span>
                            <div className="stat-content">{currency}{numFormatter(globalStats?.total24hVolume)}</div>
                        </div>
                        <div className="grid-item">
                            <span className="stat-title">Total Markets</span>
                            <div className="stat-content">{numFormatter(globalStats?.totalMarkets)}</div>
                        </div>
                    </div>
                )}
                
            </article>

            <div className="home-heading-container">
                <div className="home-title">Top 10 Cryptocurrencies in the world</div>
                <div className="show-more"><Link to="/cryptocurrencies">Show More</Link></div>
            </div>
            <Cryptocurrencies topTen />

            <div className="home-heading-container">
                <div className="home-title">Top 3 Exchanges in the world</div>
                <div className="show-more"><Link to="/exchanges">Show More</Link></div>
            </div>
            <Exchanges topThree />
        </section>
    )
}

export default Home