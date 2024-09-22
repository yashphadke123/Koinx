import {useState,useEffect,React} from 'react'
import styled from 'styled-components'
import moment from 'moment'

function Fundamentals(props) {
    const init_data = {"market_data":{"low_24h":{"usd":50000},"high_24h":{"usd":60000},"atl":{"usd":10000},"ath":{"usd":70000},"current_price":{"usd":50000},"total_volume":{"usd":50000},"market_cap":{"usd":30},"market_cap_rank":1,"ath_date":{"usd":"2024-03-13T08:35:34.668Z"},"atl_date":{"usd":"2024-03-13T08:35:34.668Z"}}}
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
        <h1>Fundamentals</h1>
        <Lefttitle>Current Price:</Lefttitle>
        <Lefttitle>24h Low/24h High:</Lefttitle>
        <Lefttitle>7d Low/7d High:</Lefttitle>
        <Lefttitle>Trading Volume:</Lefttitle>
        <Lefttitle>Market Cap Rank:</Lefttitle>
        <Righttitle>Market Cap:</Righttitle>
        <Righttitle>Market Cap Dominance:</Righttitle>
        <Righttitle>Volume/Market Cap:</Righttitle>
        <Righttitle>All-Time High:</Righttitle>  
        <Righttitle>All-Time Low:</Righttitle>
        <Leftid>${(coin.market_data.current_price.usd).toLocaleString()}</Leftid>
        <Leftid>${(coin.market_data.low_24h.usd).toLocaleString()}/${(coin.market_data.high_24h.usd).toLocaleString()}</Leftid>
        <Leftid>${(coin.market_data.atl.usd).toLocaleString()}/${(coin.market_data.ath.usd).toLocaleString()}</Leftid>
        <Leftid>${(coin.market_data.total_volume.usd).toLocaleString()}</Leftid>
        <Leftid>#{coin.market_data.market_cap_rank}</Leftid>
        <Rightid>${(coin.market_data.market_cap.usd).toLocaleString()}</Rightid>
        <Rightid>{(coin.market_data.market_cap.usd/3000000000000 *100).toFixed(3)}%</Rightid>
        <Rightid>{(coin.market_data.total_volume.usd/coin.market_data.market_cap.usd).toFixed(3)}</Rightid>
        <Rightid>${(coin.market_data.ath.usd).toLocaleString()}</Rightid>
        <Rightid>${(coin.market_data.atl.usd).toLocaleString()}</Rightid>
        <PerchnP>{((-coin.market_data.ath.usd + coin.market_data.current_price.usd)/coin.market_data.ath.usd*100).toFixed(0)}%</PerchnP>
        <PerchnN>{((-coin.market_data.atl.usd + coin.market_data.current_price.usd)/coin.market_data.atl.usd*100).toFixed(0)}%</PerchnN>
        <Dates>{moment(((coin.market_data.ath_date.usd).slice(0,10))).format('DD MMMM YYYY')}</Dates>
        <Dates>{moment((coin.market_data.atl_date.usd).slice(0,10)).format('DD MMMM YYYY')}</Dates>
    </Main>
  )
}

export default Fundamentals

const Main = styled.div`
position:relative;
left:-13.5%;
width:130%;
height:20rem;
background-color:white;
border-radius:2%;
h1{
position:relative;
left:5%;
top:3%;}
`

const Lefttitle = styled.div`
padding-left:5%;
padding-top:2%;
font-size:120%;
`

const Righttitle = styled.div`
position:relative;
font-size:120%;
padding-top:2%;
left:50%;
top:-14rem;
width:50%;
`

const Leftid = styled.h3`
position:relative;
left:25%;
top:-27.5rem;
`

const Rightid = styled.h3`
position:relative;
padding-top:0.25%;
left:75%;
top:-41.6rem;
width:50%;
`

const PerchnP = styled.h5`
position:relative;
left:85%;
top:-47.7rem;
font-size:100%;
color:red;
width:50%;
`
const PerchnN = styled.h5`
position:relative;
left:85%;
top:-47.7rem;
font-size:100%;
color:green;
width:50%;
`
const Dates = styled.div`
position:relative;
font-size:100%;
padding-top:3%;
left:75%;
top:-54rem;
width:50%;
`