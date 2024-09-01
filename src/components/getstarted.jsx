import React from 'react'
import get_str from '../assets/get_started.png'
import styled from 'styled-components'

function Getstarted() {
  return (
    // <div>G</div>
    <Images src={get_str} width='28%'></Images>
  )
}

const Images = styled.img`
position:relative;
width:28%;
left:67%;
top:-59.5rem;
border-radius:2%;
`

export default Getstarted