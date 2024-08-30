import React from 'react'
import TradingViewWidget from '../components/widget'
import Trending from '../components/trending'

function Hompage() {
  return (
    <div>
      <TradingViewWidget name="BTCUSD"/>
      <Trending></Trending>
    </div>
  )
}

export default Hompage