import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useGetMarketsQuery } from '../services/cryptoApi';
import { numFormatter } from '../utils/numFormatter';
import { formatNumWithComma } from '../utils/formatNumWithComma';
import{ BiSearch } from 'react-icons/bi'
import Loading from '../components/Loading'
import { Helmet } from 'react-helmet';

const Markets = ({ topThree }) => {
  const count = topThree ? 3 : 50
  const { data, isFetching } = useGetMarketsQuery(count);
  const [markets, setMarkets] = useState([])
  const [searchTerm, setSearchTerm] = useState('') 

  useEffect(() => {
    const filteredData = data?.data?.markets.filter((coin) => {
        return Object.values(coin).some(name => String(name).toLowerCase().includes(searchTerm.toLowerCase()))
    })
    setMarkets(filteredData)
  }, [data?.data?.markets, searchTerm])

  // if (isFetching) return <Loading />;

  return (
    <div className="exchange-market-crypto-list">
      <Helmet>
        <title>Top crypto exchange markets | Crypthub</title>
        <meta name="description" content="Top crypto exchange markets of Crypthub. Discover all cryptocurrencies markets and top trading pairs from every exchange, ranked by trading volume." />
        <meta name="keywords" content="crypto exchange markets, crypto, base price, crypto percent change, crypto exchanges 24 hour trade volume" />
      </Helmet>
      {!topThree && <>
        <h3 className="text-center">Top crypto exchange markets</h3>
        <p className="text-center">Discover all {data?.data?.markets?.length} cryptocurrency markets and top trading pairs from every exchange, ranked by trading volume.</p>
        
        <div className="search-crypto">
          <input placeholder="Find a market" onChange={(e) => setSearchTerm(e.target.value)} />
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
                      Markets
                    </th>
                    <th scope="col">
                      Base Price
                    </th>
                    <th scope="col">
                      24h Trade Volume
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
                  : markets === undefined 
                  ? <tr>
                    <td colSpan="7" className="not-found text-center">No cryptocurrency found</td>
                  </tr>
                  : markets?.map((market) => { 
                    return (
                      <tr key={market?.id} className="">
                          <td>{market?.rank}</td>
                          <td>
                            <div className="market-main">
                                <img className="exchange-market-crypto-image" src={market?.sourceIconUrl} alt={market?.name} width="25px" />
                                <div>
                                    <strong className="exchange-market-coin-name">{market?.baseSymbol}/{market?.quoteSymbol}</strong>
                                    <div>{market?.sourceName}</div>
                                </div>
                            </div>
                          </td>
                          <td>&#36;{formatNumWithComma(market?.price)}</td>
                          <td>
                            {numFormatter(market?.volume) }
                          </td>
                          <td>
                            {millify(market?.marketShare)}%
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

export default Markets