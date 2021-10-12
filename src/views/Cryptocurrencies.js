import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from "millify";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'


export default function DataTable({ topTen }) {



  const count = topTen ? 10 : 100
  // const { data: cryptosList, isFetching } = useGetCryptosQuery(count)

  // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState(cryptosList)
  console.log(cryptosList?.data?.coins);
  console.log(cryptos);

  if (isFetching) return "Loading...";

  return (
    <div className="crypto-table">
      <div className="crypto-table-inner-1">
        <div className="crypto-table-inner-2">
          <div className="crypto-table-inner-3">
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    S/N
                  </th>
                  <th scope="col">
                    Name
                  </th>
                  <th scope="col">
                    price
                  </th>
                  <th scope="col">
                    24h%
                  </th>
                  <th scope="col">
                    market cap
                  </th>
                  <th scope="col">
                    volume(24h)
                  </th>
                  <th scope="col">
                    circulating supply
                  </th>
                </tr>
              </thead>

              <tbody>
                {cryptosList?.data?.coins.length === 0 || cryptosList?.data?.coins === undefined 
                ? <tr>
                  <td colSpan="7" className="not-found">No cryptocurrency found</td>
                </tr>
              : cryptosList?.data?.coins.map((currency, index) => { 
                  return (
                    <tr  className="">
                        <td>{index + 1}</td>
                        <td>
                          <Link to={`crypto/${currency?.id}`}>
                            <img className="crypto-image" src={currency?.iconUrl} alt={currency?.name} width="18px" />
                            <span className="coin-name">{currency?.name}</span>
                            <span className="coin-symbol">{currency?.symbol}</span>
                          </Link>
                        </td>
                        <td>&#36;{currency?.price}</td>
                        <td className={currency?.change < 0 ? "red" : "green"}>
                          {currency.change < 0 ? <AiFillCaretDown size="12px" /> : <AiFillCaretUp size="12px" />}{Math.abs(currency?.change)}
                        </td>
                        <td>&#36;{currency?.marketCap}</td>
                        <td>&#36;{currency?.volume}</td>
                        <td>&#36;{currency?.circulatingSupply}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}