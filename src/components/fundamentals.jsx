import {useState,useEffect,React} from 'react'
import styled from 'styled-components'

function Fundamentals(props) {
    const init_data = {"market_data":{"low_24h":{"usd":50000},"high_24h":{"usd":60000},"atl":{"usd":10000},"ath":{"usd":70000},"current_price":{"usd":50000},"total_volume":{"usd":50000},"market_cap":{"usd":30},"market_cap_rank":1}}
    const [coin,Setcoin] = useState(init_data)
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        const get_coin_data = async(id) =>{
            const options = {method: 'GET',headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-a69KTs2FiuKFuDUMmpUiPCUK'}};
            const response = await fetch('https://api.coingecko.com/api/v3/coins/'+id, options)
            const data = await response.json()
            Setcoin(data)
        }
        get_coin_data(props.id)
    },[])
  return (
    <Main>
        <h1>Fundamentals</h1>
        <div>Bitcoin Price</div>
        <div>24h Low/24h High</div>
        <div>7d Low/7d High</div>
        <div>Trading Volume</div>
        <div>Market Cap Rank</div>
        <div>Market Cap</div>
        <div>Market Cap Dominance</div>
        <div>Volume/Market Cap</div>
        <div>All-Time High</div>
        <div>All-Time Low</div>
        <h3>${coin.market_data.current_price.usd}</h3>
        <h3>${coin.market_data.low_24h.usd}/${coin.market_data.high_24h.usd}</h3>
        <h3>${coin.market_data.atl.usd}/${coin.market_data.ath.usd}</h3>
        <h3>${coin.market_data.total_volume.usd}</h3>
        <h3>#{coin.market_data.market_cap_rank}</h3>
        <h3>${coin.market_data.market_cap.usd}</h3>
        <h3>{(coin.market_data.market_cap.usd/3000000000000 *100).toFixed(3)}%</h3>
        <h3>{(coin.market_data.total_volume.usd/coin.market_data.market_cap.usd).toFixed(3)}</h3>
        <h3>${coin.market_data.ath.usd}</h3>
        <h3>${coin.market_data.atl.usd}</h3>
        <h5></h5>
        <h5></h5>
        <div></div>
        <div></div>
    </Main>
  )
}

export default Fundamentals

const Main = styled.div`
width:65%;
height:20rem;
background-color:white;
border-radius:2%;
h1{
position:relative;
left:5%;
top:3%;}
`
