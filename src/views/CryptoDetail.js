import React, { useState } from 'react'
import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';

const CryptoDetail = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const cryptoDetails = data?.data?.coin;
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    if (isFetching) return "Loading...";
    return (
        <div className="crypto-detail coin-detail-container">
            <div className="coin-heading-container">
                <h1 className="coin-name">
                    {cryptoDetails.name} ({cryptoDetails.slug}) Price
                </h1>
                <p>
                    {cryptoDetails.name} live price in US dollars.
                    View value statistics, market cap and supply.
                </p>
            </div>
            
        </div>
    )
}

export default CryptoDetail
