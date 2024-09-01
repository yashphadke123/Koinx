import {useState,React,useEffect} from 'react'
import styled from 'styled-components'
function Trending() {
  const [coin,setCoin] = useState([])

   useEffect(()=>{
    const api_key = process.env.REACT_APP_API_KEY
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': api_key}
    };
    const trending_data = async ()=>{
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending', options)
      const data = await response.json()
      setCoin(data.coins)
      } 
      trending_data()
    },[])
    console.log(coin)
  return (
    <Main>
      <h1>Trending Coins (24h)</h1>
      {coin.slice(0,3).map((items)=>{
        return(
          <Bars>
            <img src={items.item.thumb} alt=''></img>
            <h3>{items.item.name + "\n"+"("+ items.item.symbol+")"}</h3>
            <h4>{items.item.data.price_change_percentage_24h.usd.toFixed(2) + "%"}</h4>
          </Bars>
        )
      }
      )}
    </Main>
  )
}

const Main = styled.div`
position:relative;
left:67%;
top:-7rem;
background-color:white;
width:28%;
border-radius:2%;
h1{
padding-top:5%;
padding-left:5%;
text-align:left;
}`

const Bars = styled.div`
padding-left:5%;
height:5rem;
img{
width:15%;
}

h3{
padding:0px;
position:relative;
font-size:100%;
left:20%;
top:-4rem;
width:50%;
}

h4{
font-size:75%;
position:relative;
padding:0px;
left:80%;
width:25%;
top:-6.2rem;
}
`


export default Trending