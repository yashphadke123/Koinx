import React from 'react'

function Scrollcomp(props) {
  return (
    <div>
        <img src={props.thumb} className='thumb'></img>
        <h1 className='tic'>{props.ticker}</h1>
        <h5 className={props.change>0?'pchn':'nchn'}>{props.change}%</h5>
        <h3 className='price'>${props.price}</h3>
        <img src={props.line} className='line'></img>
    </div>

  )
}

export default Scrollcomp