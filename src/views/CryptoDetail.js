import React, { useState } from 'react'
import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import LineChart from '../components/LineChart';
import { numFormatter } from '../utils/numFormatter';

import { AiOutlineDollar, AiOutlineNumber, AiOutlineTrophy, AiOutlineThunderbolt } from "react-icons/ai"

const CryptoDetail = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('30d');
    const { data, isFetching } = useGetCryptoDetailQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const cryptoDetails = data?.data?.coin;

    // console.log(coinHistory);
    // console.log(timePeriod);
    // console.log(coinId);
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    
    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <AiOutlineDollar size="21px" /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <AiOutlineNumber size="21px" /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <AiOutlineThunderbolt size="21px" /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <AiOutlineDollar size="21px" /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${numFormatter(cryptoDetails?.allTimeHigh?.price)}`, icon: <AiOutlineTrophy /> },
    ];
    
    // console.log(cryptoDetails?.allTimeHigh?.price);
    // console.log(stats);
    
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

            <div className="stats-container">
                <div className="coin-value-statistics">
                    <div className="coin-value-statistics-header">
                        <h3>
                            {cryptoDetails.name} value statistics
                        </h3>
                        <p>
                            An overview showing the stats of {cryptoDetails.name}
                        </p>
                    </div>
                    {stats.map(({ icon, title, value }) => (
                        <div className="coin-stats">
                            <div className="coin-stats-name">
                                <p>{icon}</p>
                                <p>{title}</p>
                            </div>
                            <p className="stats">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="other-stats-info">
                    <div className="coin-value-statistics-heading">
                        <h3 className="coin-details-heading">
                            Other Statistics
                        </h3>
                        <p>
                            An overview showing the stats of all cryptocurrencies
                        </p>
                    </div>
                    {/* {genericStats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))} */}
                </div>
            </div>

        </div>
    )
}

export default CryptoDetail
