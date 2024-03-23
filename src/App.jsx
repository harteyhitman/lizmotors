import React from 'react'

import './App.css'
import './global.scss'
import Main from './main-page/main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Research from './dashboard/nav-menu/menu/research'
import Plannning from './dashboard/nav-menu/menu/plannning'
import Design from './dashboard/nav-menu/menu/design'
import Manufacture from './dashboard/nav-menu/menu/manufacture'
import Sales from './dashboard/nav-menu/menu/sales'
import B2c from './components/b2c'
import EndUsers from './end-users/end-users'


const App = () => {
  return (

    <Router>
      <Routes >
        <Route path='/' element={<Main />}/>
        <Route path='/marketresearch' element={<Main><Research /></Main>} />
        <Route path='/planning' element={<Main><Plannning /></Main> } />
        <Route path='/designing' element={ <Main><Design /></Main>} />
        <Route path='/manufacturing' element={<Main><Manufacture /></Main>} />
        <Route path='/salesmarketing' element={<Main><Sales /></Main>} />
        <Route path='/marketresearch/b2c' element={<B2c />}/> 
        <Route path='/marketresearch/b2c/endusers' element={<EndUsers />}/> 
      </Routes>
    </Router>
  )
}

export default App