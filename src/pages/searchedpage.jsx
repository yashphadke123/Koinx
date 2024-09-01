import React from 'react'
import { useParams } from 'react-router-dom'
import TradingViewWidget from '../components/widget'
import Trending from '../components/trending'
import Tabs from '../components/tabs'
import Getstarted from '../components/getstarted'

function Searchedpage() {
  const param = useParams()
  console.log(param)
  return (
    <div>
      <TradingViewWidget name={param.coin}/>
      <Trending></Trending>
      <Getstarted></Getstarted>
      <Tabs></Tabs>
    </div>
  )
}

export default Searchedpage