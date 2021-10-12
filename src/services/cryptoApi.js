import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'efb33b4ca6msh20afb921596d426p19d25cjsn76dfbf5166e7'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
          getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`),
          }),
          getExchanges: builder.query({
            query:(count) => createRequest(`/exchanges`),
          }),
          getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }), 
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }), 
    })
})


export const { useGetCryptosQuery , useGetCryptoDetailsQuery , useGetExchangesQuery , useGetCryptoHistoryQuery} = cryptoApi;












    // if (isFetching) return "Loading"



// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'efb33b4ca6msh20afb921596d426p19d25cjsn76dfbf5166e7'
//     }
//   };