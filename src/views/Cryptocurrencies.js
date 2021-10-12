import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from "millify";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'


export default function DataTable({ ten }) {



  const count = ten ? 10 : 100
  // const { data: cryptosList, isFetching } = useGetCryptosQuery(count)

  // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState(cryptosList)
  console.log(cryptosList?.data?.coins);
  console.log(cryptos);

  if (isFetching) return "Loading...";

  return (
    // <ul className="flex flex-col crypto-table">
    //   <li>
    //     Hello
    //   </li>
    //   {cryptos.map((currency) => {
    //     return (
    //       <li>
    //         <span>{currency.name}</span>
    //       </li>
    //     )
    //   })}
    // </ul>
    <div className="flex flex-col crypto-table">
      <div className="mb-3 overflow-x-auto rounded-xl shadow-md">
        <div className="pt-2 align-middle inline-block min-w-full">
          <div className="overflow-hidden border-gray-200 rounded-xl">
            <table className="w-full divide-y divide-gray-200 relative">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-1 md:px-3 py-5 text-left text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
                    S/N
                  </th>
                  <th scope="col" className="px-2 md:px-4 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    amount
                  </th>
                  <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ref no.
                  </th>
                  <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    status
                  </th>
                  <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    date &amp; time
                  </th>
                  <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-300">
                {/* {Array.isArray(cryptos) && cryptos.length === 0 
                ? <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-600">No cryptocurrcency found</td>
                </tr>
                : cryptos.map((currency, index) => {  */}
              {cryptosList?.data?.coins.map((currency, index) => { 
                  return (
                    <tr  className="">
                        <td className="font-medium whitespace-nowrap text-center px-1 md:px-3 py-3">{index + 1}</td>
                        <td className="font-medium whitespace-nowrap truncate md:px-4 px-2 py-3">
                      <Link to={`crypto/${currency?.id}`}>
                          {currency?.name}
                          <img className="crypto-image" src={currency?.iconUrl} alt={currency?.name} width="18px" />
                      </Link>
                        </td>
                        <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">&#36;{millify(currency?.price)}</td>
                        <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">&#36;{currency?.circulatingSupply}</td>
                        <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">&#36;{millify(currency?.volume)}</td>
                        <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">&#36;{millify(currency?.marketCap)}</td>
                        <td className={currency?.change < 0 ? "red" : "green"}>
                          {currency.change < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}{Math.abs(currency?.change)}
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
  );
}