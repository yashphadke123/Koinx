import {useState,useEffect,React} from 'react'

function OverView(props) {   
    const [coin,Setcoin] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        const get_coin_data = async(id) =>{
            const options = {method: 'GET',headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-uh7gjgSWPiiS44Dg3R7Nhh1D' }};
            const response = await fetch('https://api.coingecko.com/api/v3/coins/'+id, options)
            const data = await response.json()
            Setcoin(data)
        }
        get_coin_data(props.id)
    },[])
    console.log(coin)
  return (
    <div>OverView</div>
  )
}

export default OverView