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

    return (
        <div className="crypto-detail">
            Hello World
        </div>
    )
}

export default CryptoDetail
