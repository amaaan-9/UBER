import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Home from './pages/Home'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
       </Routes>   
    </div>
  )
}

export default App