import React from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Joinus from './pages/joinUs'

function route() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Joinus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default route