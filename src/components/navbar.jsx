import React from 'react'
import icon from '../assets/logo.png'
import styled from 'styled-components'
import Searched from './search'
function Navbar() {
  return (
    <Topnav>
      <Images src={icon} alt='' width='15%'></Images>
      <Crypto>Crypto Taxes</Crypto>
      <Trial>Free Trial</Trial>
      <Resource>Resources Center</Resource>
      <Searched></Searched>
      </Topnav>
  )
}

export default Navbar


const Topnav = styled.nav`
background-color:white;
height:150px;
`

const Images = styled.img`
padding-top:3%;
padding-left:5%;
`

const Crypto = styled.h3`
position:relative;
left:45%;
width:20%;
top:-4.5rem;
`

const Trial = styled.h3`
position:relative;
left:55%;
width:20%;
top:-7.3rem;
`

const Resource = styled.h3`
position:relative;
left:63%;
width:20%;
top:-10.0rem;
`