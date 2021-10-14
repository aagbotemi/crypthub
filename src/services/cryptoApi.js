import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

require('dotenv').config()

const CRYPTO_API_KEY = process.env.REACT_APP_CRYPTO_API;

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': CRYPTO_API_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi




// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// require('dotenv').config()

// const CRYPTO_API_KEY = process.env.REACT_APP_CRYPTO_API;

// const cryptoApiHeaders = {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': CRYPTO_API_KEY
// }

// const baseUrl = 'https://coinranking1.p.rapidapi.com'

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptos: builder.query({
//             query: (count) => createRequest(`/coins?limit=${count}`)
//         }),
//         getCryptoDetail: builder.query({
//             query: (coinId) => createRequest(`/coin/${coinId}`)
//         }),
//         getCryptoHistory: builder.query({
//             query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
//         }),
//     })
// })

// export const {
//     useGetCryptosQuery,
//     useGetCryptoDetailQuery,
//     useGetCryptoHistoryQuery,
// } = cryptoApi
