import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'
import Banner from './components/Banner.jsx'
function App() {

  return (
    <>
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      <main>
        <Banner />
      </main>
    </>
  )
}

export default App
