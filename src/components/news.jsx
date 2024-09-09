import {useEffect,useState,React} from 'react'
import styled from 'styled-components'

function News(props) {
    // const init_data = {"market_data":{"low_24h":{"usd":50000},"high_24h":{"usd":60000},"atl":{"usd":10000},"ath":{"usd":70000},"current_price":{"usd":50000}}}
    const [coin,Setcoin] = useState({"description":{"en":"some temp text"}})
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
    console.log(coin.description.en)
  return (
    <Main>
        <h1>About {coin.id}</h1>
        <Content>{(coin.description.en).slice(0,933)}</Content>
    </Main>
  )
}

//933 is the final thing
export default News

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

const Content = styled.div`
padding-left:7%;
padding-right:7%;
`