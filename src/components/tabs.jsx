import React from 'react'
import { useState } from 'react'
import './tabs.css'
import OverView from './overview'
import Fundamentals from './fundamentals'
import News from './news'
import Sentiment from './sentiment'
import Team from './team'
function Tabs() {
  const [toggle,setToggle] = useState(1)
  const toggle_Tabs = (index) =>{
    setToggle(index)
  }
  return (
    <ul>  
      <div onClick={()=>toggle_Tabs(1)} className={toggle === 1 ? 'active_tab':'tab'}>Overview
        <div className={toggle === 1 ? 'active_content':'content'}>
          <OverView id='bitcoin'></OverView>
        </div>
        </div>
      <div onClick={()=>toggle_Tabs(2)} className={toggle === 2 ? 'active_tab':'tab'}>Fundamentals
        <div className={toggle === 2 ? 'active_content':'content'}>
           <Fundamentals id='bitcoin'></Fundamentals>
        </div>
      </div>
      <div onClick={()=>toggle_Tabs(3)} className={toggle === 3 ? 'active_tab':'tab'}>News Insight
        <div className={toggle === 3 ? 'active_content':'content'}>
        <News id='bitcoin'></News>  
        </div>
      </div>
      <div onClick={()=>toggle_Tabs(4)} className={toggle === 4 ? 'active_tab':'tab'}>Sentiment
        <div className={toggle === 4 ? 'active_content':'content'}>
          <Sentiment id='bitcoin'></Sentiment>
          </div>
      </div>
      <div onClick={()=>toggle_Tabs(5)} className={toggle === 5 ? 'active_tab':'tab'}>Team
        <div className={toggle === 5 ? 'active_content':'content'}>
          <Team id='bitcoin'></Team>  
        </div>
      </div>
      <div onClick={()=>toggle_Tabs(6)} className={toggle === 6 ? 'active_tab':'tab'}>Technicals
        <div className={toggle === 6 ? 'active_content':'content'}>6</div>
      </div>
      <div onClick={()=>toggle_Tabs(7)} className={toggle === 7 ? 'active_tab':'tab'}>Tokenomics
        <div className={toggle === 7 ? 'active_content':'content'}>7</div>
      </div>
    </ul> 
  )
}

export default Tabs

