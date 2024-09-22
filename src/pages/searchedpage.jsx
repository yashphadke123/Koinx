import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TradingViewWidget from '../components/widget'
import Trending from '../components/trending'
import Tabs from '../components/tabs'
import Getstarted from '../components/getstarted'
import Youmaylike from '../components/youmaylike'

function Searchedpage() {
  const [ticker,setTicker] = useState([{"base":"BTC","coin_id":'bitcoin'},{"coin_id":'bitcoin'}])
  const param = useParams()
  useEffect(()=>{
    const api_key = process.env.REACT_APP_API_KEY
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-a69KTs2FiuKFuDUMmpUiPCUK'}
    };
    const getTicker = async ()=>{
      const response = await fetch('https://api.coingecko.com/api/v3/coins/'+param.coin+'/tickers', options)
      const data = await response.json()
      setTicker(data.tickers)
      } 
      getTicker()
    },[param.coin])
    console.log(ticker[0].base+'USD')
    console.log(ticker[0].coin_id)
  return (
    <div>
      <TradingViewWidget name={ticker[0].base+'USD'}/>
      <Trending></Trending>
      <Getstarted></Getstarted>
      <Tabs name={ticker[0].coin_id}></Tabs>
      <Youmaylike></Youmaylike>
    </div>
  )
}

export default Searchedpage