import React, { useState } from 'react'
import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import LineChart from '../components/LineChart';
import { numFormatter } from '../utils/numFormatter';
import CircularLoading from '../components/CircularLoading'
import { AiOutlineDollar, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineNumber, AiOutlineTrophy, AiOutlineThunderbolt, AiOutlineStop, AiOutlineCheck, AiOutlineExclamation, AiOutlineExclamationCircle } from "react-icons/ai"
import { Helmet } from 'react-helmet';

const CryptoDetail = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const cryptoDetails = data?.data?.coin;

    // const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    
    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <AiOutlineDollar size="21px" /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <AiOutlineNumber size="21px" /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <AiOutlineThunderbolt size="21px" /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <AiOutlineDollar size="21px" /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${numFormatter(cryptoDetails?.allTimeHigh?.price)}`, icon: <AiOutlineTrophy size="21px" /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <AiOutlineFund size="21px" /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <AiOutlineMoneyCollect size="21px" /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.approvedSupply ? <AiOutlineCheck color='green' size="21px" /> : <AiOutlineStop color='red' size="21px" />, icon: <AiOutlineExclamation size="21px" /> },
        { title: 'Total Supply', value: `$ ${numFormatter(cryptoDetails?.totalSupply)}`, icon: <AiOutlineExclamationCircle size="21px" /> },
        { title: 'Circulating Supply', value: `$ ${numFormatter(cryptoDetails?.circulatingSupply)}`, icon: <AiOutlineExclamationCircle size="21px" /> },
    ];
    
    if (isFetching) return <CircularLoading />;
    return (
        <div className="coin-detail-container">
            <Helmet>
                <title>{`${cryptoDetails.name} price today, ${cryptoDetails.symbol} to USD live, market cap, chart, details | Crypthub`}</title>
                <meta name="description" content="Cryptocurrencies Listing page of Crypthub. The listing page of top 100 cryptocurrencies, market capitalization, volume, circulating supply" />
                <meta name="keywords" content="Cryptocurrencies, top 100 cryptocurrencies, market capitalization, crypto market cap, crypto volume, crypto circulating supply" />
            </Helmet>
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
                    <div className="coin-value-statistics-header">
                        <h3>
                            Other Statistics
                        </h3>
                        <p>
                            An overview showing the stats of all cryptocurrencies
                        </p>
                    </div>
                    {genericStats.map(({ icon, title, value }) => (
                        <div className="coin-stats">
                            <div className="coin-stats-name">
                                <p>{icon}</p>
                                <p>{title}</p>
                            </div>
                            <p className="stats">{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="coin-desc-link">
                <div className="coin-details">
                    <h3>
                        What is {cryptoDetails.name}
                    </h3>
                    <p>{HTMLReactParser(cryptoDetails.description)}</p>
                </div>
                <div className="coin-links">
                    <h3>
                        {cryptoDetails.name} links
                    </h3>
                    {cryptoDetails.links.map((link) => (
                        <div className="coin-link" key={link.name}>
                            <h5 className="link-name">
                                {link.type}
                            </h5>
                            <div className='link'>
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    {link.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CryptoDetail
