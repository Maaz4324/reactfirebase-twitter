import './App.css'
import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Tweet from './components/Tweet'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { auth } from './firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import MobileTweet from './components/MobileTweet'

function App() {
  const [user] = useAuthState(auth)

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route exact path="/tweet" element={<MobileTweet />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
