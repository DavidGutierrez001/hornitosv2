import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'

function App() {

  return (
    <>
      <header>
        <Navbar />
        <SubNavbar />
      </header>
    </>
  )
}

export default App
