import React, { useState } from 'react'
import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import LineChart from '../components/LineChart';

const CryptoDetail = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('30d');
    const { data, isFetching } = useGetCryptoDetailQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const cryptoDetails = data?.data?.coin;

    console.log(coinHistory);
    console.log(timePeriod);
    console.log(coinId);
    console.log(cryptoDetails);
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    if (isFetching) return "Loading...";
    return (
        <div className="coin-detail-container">
            <div className="coin-header-container text-center">
                <h1 className="coin-name">
                    {cryptoDetails.name} ({cryptoDetails.slug}) Price
                </h1>
                <p>
                    {cryptoDetails.name} live price in US dollars.
                    View value statistics, market cap and supply.
                </p>
            </div>
            {/* <div className="select-timeperiod">
                <select
                    defaultValue="7d"
                    placeholder="Select Time Period"
                    onChange={(value) => setTimePeriod(value)}
                >
                    {time.map((date) => <option key={date}>{date}</option>)}
                </select>
            </div> */}
            {/* Line Chart */}
            <LineChart
                coinHistory={coinHistory}
                currentPrice={millify(cryptoDetails.price)}
                coinName={cryptoDetails.name}
            />
        </div>
    )
}

export default CryptoDetail
