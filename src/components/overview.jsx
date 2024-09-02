import {useState,useEffect,React} from 'react'
import styled from 'styled-components'

function OverView(props) {   
    const [coin,Setcoin] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        const get_coin_data = async(id) =>{
            const options = {method: 'GET',headers: {accept: 'application/json', 'x-cg-demo-api-key': api_key }};
            const response = await fetch('https://api.coingecko.com/api/v3/coins/'+id, options)
            const data = await response.json()
            Setcoin(data)
        }
        get_coin_data(props.id)
    },[])
    console.log(coin)
        return (
            <Main>
               <h1>Performance</h1>
               <Low24> ${coin.market_data.low_24h.usd}</Low24>
               <Line1></Line1>
               <High24> ${coin.market_data.high_24h.usd}</High24>
               <Low24> ${coin.market_data.atl.usd}</Low24>
               <Line1></Line1>
               <High24> ${coin.market_data.ath.usd}</High24>
            </Main>
          )
}

export default OverView

const Main = styled.div`
width:65%;
height:20rem;
background-color:white;
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
top:-2.3rem;
`