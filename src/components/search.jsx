import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type'

function Search() {
    const [coin,searchCoin] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/"+coin)
    }
  return ( 
    <form onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e)=>{searchCoin(e.target.value)}} type='text' value={coin}></input>
        </div>
    </form>
  )
}

export default Search

// const FormStyle = styled.form`
// width:20%;

// div{
// width:20%;
// }
// `