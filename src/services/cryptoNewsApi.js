import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoNewsHeaders =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'efb33b4ca6msh20afb921596d426p19d25cjsn76dfbf5166e7'
  }

  const baseUrl = "https://bing-news-search1.p.rapidapi.com/"

const createRequest = (url) => ({url, headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews : builder.query({
            query:({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;



