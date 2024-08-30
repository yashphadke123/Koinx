import React from 'react'

function Trending() {
  const api_key = process.env.REACT_APP_API_KEY
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': "'"+api_key+"'"}
  };
  
   const trending_data = async ()=>{
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending', options)
      const data = await response.json()  
      console.log(data.coins)
   } 
   trending_data()
   console.log(data.coins)
  return (
    <div>T</div>
  )
}

export default Trending