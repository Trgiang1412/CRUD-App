import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import './App.scss'
function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/home" element={<Main tab={1}/>} />
      <Route path="/students" element={<Main tab={2}/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
