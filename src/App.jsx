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
import HomePage from './dashboard/nav-menu/menu/home-page'


const App = () => {
  return (

    <Router>
      <Routes >
        <Route path='/' exact element={<Main><HomePage /></Main>}/>
        <Route path='/marketresearch' exact element={<Main><Research /></Main>} />
        <Route path='/planning' exact element={<Main><Plannning /></Main> } />
        <Route path='/designing' exact element={ <Main><Design /></Main>} />
        <Route path='/manufacturing' exact element={<Main><Manufacture /></Main>} />
        <Route path='/salesmarketing' exact element={<Main><Sales /></Main>} />
        <Route path='/marketresearch/b2c' exact element={<B2c />}/> 
        <Route path='/marketresearch/b2c/endusers' exact element={<EndUsers />}/> 
      </Routes>
    </Router>
  )
}

export default App