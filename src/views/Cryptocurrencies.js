import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from "millify";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { formatNumWithComma } from '../utils/formatNumWithComma';
import { numFormatter } from '../utils/numFormatter';



export default function Cryptocurrencies({ topTen }) {



  const count = topTen ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // const filteredData = cryptosList?.data?.coins.filter((coin) => {
    //   return Object.values(coin).some(name => String(name).toLowerCase().includes(searchTerm.toLowerCase()))
    // })
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // console.log(filteredData)
    setCryptos(filteredData)
  }, [cryptosList?.data?.coins, searchTerm])

  if (isFetching) return "Loading...";

  return (
    <div className="crypto-list">
      {!topTen && <>
        <h1>Cryptocurrency List</h1>
        <div className="search-crypto">
          <input placeholder="Search for a currency" onChange={(e) => setSearchTerm(e.target.value)} />
          <BiSearch className="" size="26px" color="gray" />
        </div>
      </>}
      <div className="crypto-table">
        <div className="crypto-table-inner-1">
          <div className="crypto-table-inner-2">
            <div className="crypto-table-inner-3">
              <table cellSpacing='0'>
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
                  {/* {cryptos.length === 0 || cryptos === undefined  */}
                  {cryptos === undefined 
                  ? <tr>
                    <td colSpan="7" className="not-found text-center">No cryptocurrency found</td>
                  </tr>
                : cryptos?.map((currency, index) => { 
                    return (
                      <tr key={currency?.id} className="">
                          <td>{index + 1}</td>
                          <td>
                            <Link className="crypto-name" to={`currencies/${currency?.id}`}>
                              <img className="crypto-image" src={currency?.iconUrl} alt={currency?.name} width="18px" />
                              <span className="coin-name">{currency?.name}</span>
                              <span className="coin-symbol">{currency?.symbol}</span>
                            </Link>
                          </td>
                        <td>&#36;{formatNumWithComma(currency?.price)}</td>
                          <td className={currency?.change < 0 ? "red" : "green"}>
                            {currency.change < 0 ? <AiFillCaretDown size="12px" /> : <AiFillCaretUp size="12px" />}{Math.abs(currency?.change)}
                          </td>
                          <td>
                            <span className="d-none d-md-block">&#36;{formatNumWithComma(currency?.marketCap)}</span>
                            <span className="d-md-none">&#36;{millify(currency?.marketCap)}</span>
                          </td>
                          <td>
                            <span className="d-none d-md-block">&#36;{formatNumWithComma(currency?.volume)}</span>
                            <span className="d-md-none">&#36;{millify(currency?.volume)}</span>
                          </td>
                          <td>
                            <span className="d-none d-md-block">&#36;{formatNumWithComma(currency?.circulatingSupply)}</span>
                            <span className="d-md-none">&#36;{numFormatter(currency?.circulatingSupply)}</span>
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