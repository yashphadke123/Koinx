import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [coin,searchCoin] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/"+coin)
    }
  return ( 
    <Forms onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <FormStyle onChange={(e)=>{searchCoin(e.target.value)}} type='text' value={coin}></FormStyle>
        </div>
    </Forms>
  )
}

export default Search

const FormStyle = styled.input`
width:60%;
`

const Forms = styled.form`
position:relative;
left:80%;
width:20%;
top:-12.5rem;
`