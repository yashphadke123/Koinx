import React from 'react'
import { useState } from 'react'
import './tabs.css'
import OverView from './overview'
import Fundamentals from './fundamentals'
import News from './news'
import Sentiment from './sentiment'


function Tabs() {
  const [toggle,setToggle] = useState(1)
  const toggle_Tabs = (index) =>{
    setToggle(index)
  }
  return (
    <ul>  
      <div onClick={()=>toggle_Tabs(1)} className={toggle === 1 ? 'active_tab':'tab'} id='overview'>Overview
        <div className={toggle === 1 ? 'active_content':'content'} id='over'>
          <OverView id='bitcoin'></OverView>
        </div>
        </div>
      <div onClick={()=>toggle_Tabs(2)} className={toggle === 2 ? 'active_tab':'tab'} id='funda'>Fundamentals
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
    </ul> 
  )
}

export default Tabs

