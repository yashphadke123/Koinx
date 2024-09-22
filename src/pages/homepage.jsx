import React from 'react'
import TradingViewWidget from '../components/widget'
import Trending from '../components/trending'
import Tabs from '../components/tabs'
import Getstarted from '../components/getstarted'
import Youmaylike from '../components/youmaylike'

function Homepage() {
  return (
    <div>
      <TradingViewWidget name="BTCUSD"/>
      <Trending></Trending>
      <Getstarted></Getstarted>
      <Tabs name='bitcoin'></Tabs>
      <Youmaylike></Youmaylike>
    </div>
  )
}

export default Homepage