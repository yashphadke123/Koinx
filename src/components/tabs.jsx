import React from 'react'
import { useState } from 'react'
import '../sylingfiles/tabs.css'
import OverView from './overview'
import Fundamentals from './fundamentals'
import News from './news'
import Sentiment from './sentiment'


function Tabs(props) {
  const [toggle,setToggle] = useState(1)
  const toggle_Tabs = (index) =>{
    setToggle(index)
  }
    return (
    <div className='tab-container'>  
      <div onClick={()=>toggle_Tabs(1)} className={toggle === 1 ? 'active_tab over':'tab'} >Overview
      <div className={toggle === 1 ? 'active_content':'content'}>
          <OverView id={props.name}></OverView>
        </div>
      </div>
      <div onClick={()=>toggle_Tabs(2)} className={toggle === 2 ? 'active_tab':'tab'}>Fundamentals
      <div className={toggle === 2 ? 'active_content':'content'}>
           <Fundamentals id={props.name} className='funda'></Fundamentals>
        </div>
      </div>

      <div onClick={()=>toggle_Tabs(3)} className={toggle === 3 ? 'active_tab':'tab'}>News Insight
        <div className={toggle === 3 ? 'active_content':'content'}>
        <News id={props.name}></News>  
        </div>
      </div>
      <div onClick={()=>toggle_Tabs(4)} className={toggle === 4 ? 'active_tab':'tab'}>Sentiment
        <div className={toggle === 4 ? 'active_content':'content'}>
          <Sentiment id={props.name}></Sentiment>
          </div>
      </div>
    </div> 
  )
}
export default Tabs

