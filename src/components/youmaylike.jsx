import {useEffect,useState,React,useRef} from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'
import Scrollcomp from './scrollcomp'
import '../sylingfiles/youmaylike.css'

function Youmaylike() {
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
     const targetRef = useRef(null)
     const {scrollYProgress} = useScroll({target:targetRef})
     const x = useTransform(scrollYProgress,[0,1],["0%","-78%"])
  return (
    <div>
        <div className="carousel" ref={targetRef}>
          <h1 className='heading'>You May Also Like</h1>
            <div className="contentContainer">
                <motion.div className="images" style={{x}}>
                    {coin.map((items)=>{
                        return(
                                <div className="imageItem">
                                    <Scrollcomp
                                    thumb={items.item.thumb}
                                    ticker={items.item.symbol}
                                    price={(items.item.data.price).toFixed(7)}
                                    change={(items.item.data.price_change_percentage_24h.usd).toFixed(2)}
                                    line={items.item.data.sparkline}
                                    />
                                </div>
                              )
                              })}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Youmaylike