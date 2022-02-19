import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {createApi} from '@reduxjs/toolkit/query/react'

// const header = {
//     'x-access-token': 'coinrankingd4c4255aeeda0611b6cee68ad6856564ab8508d131af7117'
// }

// const baseUrl = 'https://api.coinranking.com/v2'



// const createRequest = (url) => ({url, header})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://api.coinranking.com/v2/'
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `coins?limit=${count}`,
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `coin/${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => `coin/${coinId}/history?timeperiod=${timePeriod}`
        }),
        getExchanges: builder.query({
            query: () => `exchanges`,
          }),
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;