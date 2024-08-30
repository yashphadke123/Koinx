import React from 'react'
import { useParams } from 'react-router-dom'
import TradingViewWidget from '../components/widget'

function Searchedpage() {
  const param = useParams()
  console.log(param)
  return (
    <div>
      <TradingViewWidget name={param.coin}/>
    </div>
  )
}

export default Searchedpage