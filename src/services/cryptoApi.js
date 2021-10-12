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
            query: (coinId) => createRequest(`/coins/${coinId}`)
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailQuery,
} = cryptoApi
