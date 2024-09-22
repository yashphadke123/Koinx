import {useState,useEffect,React} from 'react'
import styled from 'styled-components'

function OverView(props) {   
    const init_data = {"market_data":{"low_24h":{"usd":50000},"high_24h":{"usd":60000},"atl":{"usd":10000},"ath":{"usd":70000},"current_price":{"usd":50000}}}
    const [coin,Setcoin] = useState(init_data)
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        const get_coin_data = async(id) =>{
            const options = {method: 'GET',headers: {accept: 'application/json', 'x-cg-demo-api-key': api_key}};
            const response = await fetch('https://api.coingecko.com/api/v3/coins/'+id, options)
            const data = await response.json()
            Setcoin(data)
        }
        get_coin_data(props.id)
    },[props.id])
        return (
            <Main>
               <h1>Performance</h1>
               <Low>Today's Low</Low>
               <Low24> ${(coin.market_data.low_24h.usd).toFixed(2)}</Low24>
               <Line1></Line1>
               <High>Today's High</High>
               <High24> ${(coin.market_data.high_24h.usd).toFixed(2)}</High24>
               <Low>52 Week Low</Low>
               <Low24> ${(coin.market_data.atl.usd).toFixed(2)}</Low24>
               <Line1></Line1>
               <High>52 Week High</High>
               <High24> ${(coin.market_data.ath.usd).toFixed(2)}</High24>
            </Main>
          )
}

export default OverView

const Main = styled.div`
width:130%;
height:20rem;
background-color:white;
border-radius:2%;
h1{
position:relative;
left:5%;
top:3%;}
`

const Line1 = styled.div`
position:relative;
width:70%;
height:0.5rem;
background: linear-gradient(to right, #f53900, #f5db00, #4cf500);
border-radius:0.5rem;
left:13%;`

const Low24 = styled.h4`
left:5%;
position:relative;
top:2.1rem;
`

const High24 = styled.h4`
left:86%;
position:relative;
top:-3.5rem;
width:50%;
`

const Low = styled.h4`
position:relative;
height:0rem;
left:5%;
`

const High = styled.h4`
position:relative;
height:0rem;
left:85%;
top:-5.5rem;
width:50%;
background-color:red;
`