import React from 'react';
import { convertUSDToNGN } from '../utils/currencyConverter';
import { formatNumWithComma } from '../utils/formatNumWithComma';
import { numFormatter } from '../utils/numFormatter';

const CryptoTable = ({ crypto }) => {
    const { cmc_rank, name, symbol, quote } = crypto

    return (
        <tr>
            <td>{cmc_rank}</td>
            <td>{name} <span className="symbol">{symbol}</span></td>
            <td>&#36;{formatNumWithComma(quote.USD.price)}</td>
            <td>&#8358;{convertUSDToNGN(quote.USD.price)}</td>
            <td>{numFormatter(quote.USD.market_cap)}</td>
            <td>{numFormatter(quote.USD.volume_24h)}</td>
        </tr>

    );
}

export default CryptoTable;