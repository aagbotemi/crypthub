import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoTable from '../components/CryptoTable';
import Loader from '../components/Loader';
import DateTime from '../components/DateTime';

const proxy = "https://mighty-island-53594.herokuapp.com";

require('dotenv').config()

const Home = () => {

    const [cryptocurrency, setCryptocurrency] = useState([])
    const [loading, setLoading] = useState(false)
    
    const API_KEY = process.env.REACT_APP_CMC;
    
    useEffect(() => {
        const getCryptoData = async () => {
            const qs = `?start=1&limit=200&convert=USD`
            try {
                setLoading(true)
                const response = await axios.get(`${proxy}/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest` + qs, {
                    headers: { 'X-CMC_PRO_API_KEY': API_KEY }
                });
                setCryptocurrency(response.data.data)
                console.log(response.data.data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        // running the api call on first render/refresh
        getCryptoData()
        // running the api call every one minute
        const interval = setInterval(() => {
            getCryptoData()
        }, 60000)
        return () => clearInterval(interval)
    }, [API_KEY])

    if (loading) {
        return (
            <Loader />
        )
    } 

    return (
        <section className="home">
            <article className="data-table">
                <DateTime />
                <table>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Price in USD</th>
                            <th>Price in Naira</th>
                            <th>Market Capitalization</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptocurrency.map((crypto) => {
                        return (
                            <CryptoTable key={crypto.id} crypto={crypto} />
                        )
                        })}
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default Home