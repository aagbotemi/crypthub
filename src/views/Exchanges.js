import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useGetExchangesQuery } from '../services/cryptoApi';
import{ BiSearch } from 'react-icons/bi'
import Loading from '../components/Loading'
import { Helmet } from 'react-helmet';

const Exchanges = ({ topThree }) => {
  const count = topThree ? 3 : 50
  const { data, isFetching } = useGetExchangesQuery(count);
  const [exchanges, setExchanges] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = data?.data?.exchanges?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setExchanges(filteredData)
  }, [data?.data?.exchanges, searchTerm])

  return (
    <div className="exchange-market-crypto-list">
      <Helmet>
        <title>Top crypto exchanges | Crypthub</title>
        <meta name="description" content="Top crypto exchanges of Crypthub. The listing page of top crypto exchanges, market price, 24 hour trade volume, percent change" />
        <meta name="keywords" content="crypto exchanges, crypto, market price, crypto percent change, crypto exchanges 24 hour trade volume" />
      </Helmet>
      {!topThree && <>
        <h3 className="text-center">Top crypto exchanges</h3>
        <p className="text-center">Compare all {data?.data?.exchanges?.length} top crypto exchanges. The list is ranked by trading volume.</p>

        <div className="search-crypto">
          <input placeholder="Find an exchange" onChange={(e) => setSearchTerm(e.target.value)} />
          <BiSearch className="" size="26px" color="gray" />
        </div>
      </>}
      <div className="exchange-market-crypto-table">
        <div className="exchange-market-crypto-table-inner-1">
          <div className="exchange-market-crypto-table-inner-2">
            <div className="exchange-market-crypto-table-inner-3">
              <table cellSpacing='0'>
                <thead>
                  <tr>
                    <th scope="col">
                      rank
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
                  {isFetching ?
                    <tr>
                      <td colSpan="7"><Loading /></td>
                    </tr>
                  : exchanges === undefined 
                  ? <tr>
                    <td colSpan="7" className="not-found text-center">No cryptocurrency found</td>
                  </tr>
                  : exchanges?.map((exchange) => { 
                    return (
                      <tr key={exchange?.id} className="">
                          <td>{exchange?.rank}</td>
                          <td>
                            <div className="market-main">
                              <img className="exchange-market-crypto-image" src={exchange?.iconUrl} alt={exchange?.name} width="25px" />
                              <span className="exchange-market-coin-name">{exchange?.name}</span>
                            </div>
                          </td>
                          <td>&#36;{millify(exchange?.volume)}</td>
                          <td>
                            {millify(exchange?.numberOfMarkets) }
                          </td>
                          <td>
                            {millify(exchange?.marketShare)}%
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