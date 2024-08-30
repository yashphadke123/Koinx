import React from 'react'
import icon from '../assets/logo.png'
import styled from 'styled-components'
import Searched from './search'
function Navbar() {
  return (
    <Topnav>
      <Images src={icon} alt='' width='15%'></Images>
      <h2>Crypto Taxes</h2>
      <h2>Free Trial</h2>
      <h2>Resources Center</h2>
      <Searched></Searched>
      </Topnav>
  )
}

export default Navbar


const Topnav = styled.nav`
background-color:white;
`

const Images = styled.img`
padding-top:3%;
padding-left:5%;
`