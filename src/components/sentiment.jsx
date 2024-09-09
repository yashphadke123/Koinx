import {useEffect,useState,React}from 'react'
import styled from 'styled-components'
import { PieChart,Pie,Tooltip, Cell } from 'recharts'
import './sentiment.css'

function Sentiment(props) {
    const init_data = {"sentiment_votes_up_percentage":84.07,"sentiment_votes_down_percentage":15.93}
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

    const data = [
        {name:"up_votes",percentage:coin.sentiment_votes_up_percentage},
        {name:"down_votes",percentage:coin.sentiment_votes_down_percentage

        },
    ];

    const COLORS = ['#01FF2B','#FF3301']
  return (
    <Main>
        <h1>Sentiment</h1>
        <PieChart width={350} height={250}>
                <Pie
                    cx={180}
                    data={data}
                    dataKey="percentage"
                    outerRadius={120}
                    innerRadius={80}>
                    {
                        data.map((entry,index)=>(<Cell fill={COLORS[index%COLORS.length]}></Cell>))
                    }
                </Pie>
                <Tooltip />
            </PieChart>
            <h2 className={coin.sentiment_votes_up_percentage>50?'up_more':'down_more'}>{coin.sentiment_votes_up_percentage}%</h2>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Text>
    </Main>
  )
}

export default Sentiment

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

const Text = styled.div`
position:relative;
left:45%;
width:50%;
top:-20rem;
`