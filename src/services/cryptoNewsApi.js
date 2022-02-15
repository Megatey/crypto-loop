import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'cd70deb726msh5da57583305a4a0p138b03jsnfae7a783bd44'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
      reducerPath: 'cryptoNewsApi',
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints: (builder) => ({
          getCryptoNews: builder.query({
              query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&Count=${count}`),
          })
      })
  })

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
