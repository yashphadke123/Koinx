import React from 'react'
import TradingViewWidget from '../components/widget'
import Trending from '../components/trending'
import Tabs from '../components/tabs'
import Getstarted from '../components/getstarted'

function Homepage() {
  return (
    <div>
      <TradingViewWidget name="BTCUSD"/>
      <Trending></Trending>
      <Getstarted></Getstarted>
      <Tabs></Tabs>
    </div>
  )
}

export default Homepage