import React from 'react'
import Homepage from './homepage'
import SearchedPage from './searchedpage'
import { Route,Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/:coin' element={<SearchedPage/>}></Route>
    </Routes>
  )
}

export default Pages