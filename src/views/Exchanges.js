import React, { useEffect, useState } from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import { numFormatter } from '../utils/numFormatter';
import { formatNumWithComma } from '../utils/formatNumWithComma';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import{ BiSearch } from 'react-icons/bi'

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const [exchange, setExchange] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const exchangesList = data?.data?.exchanges;

  useEffect(() => {
    const filteredData = data?.data?.exchanges?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setExchange(filteredData)
  }, [data?.data?.exchanges, searchTerm])

  if (isFetching) return "Loading...";

  return (
    <div className="exchange-market-crypto-list">
      <h3 className="text-center">Top crypto exchanges</h3>
      <p className="text-center">Compare all {exchangesList.length} top crypto exchanges. The list is ranked by trading volume.</p>

      <div className="search-crypto">
        <input placeholder="Find an exchange" onChange={(e) => setSearchTerm(e.target.value)} />
        <BiSearch className="" size="26px" color="gray" />
      </div>

      <div className="exchange-market-crypto-table">
        <div className="exchange-market-crypto-table-inner-1">
          <div className="exchange-market-crypto-table-inner-2">
            <div className="exchange-market-crypto-table-inner-3">
              <table cellSpacing='0'>
                <thead>
                  <tr>
                    <th scope="col">
                      S/N
                    </th>
                    <th scope="col">
                      Exchanges
                    </th>
                    <th scope="col">
                      24h Trade Volume
                    </th>
                    <th scope="col">
                      Markets
                    </th>
                    <th scope="col">
                      Change
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {exchange === undefined 
                  ? <tr>
                    <td colSpan="7" className="not-found text-center">No cryptocurrency found</td>
                  </tr>
                : exchange?.map((exchange) => { 
                    return (
                      <tr key={exchange?.id} className="">
                          <td>{exchange?.rank}</td>
                          <td>
                              <img className="exchange-market-crypto-image" src={exchange?.iconUrl} alt={exchange?.name} width="18px" />
                              <span className="exchange-market-coin-name">{exchange?.name}</span>
                          </td>
                          <td>&#36;{millify(exchange?.volume)}</td>
                          <td>
                            {millify(exchange?.numberOfMarkets) }
                          </td>
                          <td>
                            {millify(exchange?.marketShare)}
                          </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
  
  );
}

export default Exchanges