import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'

import Home from './pages/Home.jsx'

import Footer from './components/Footer.jsx'
import Cookies from './components/Cookies.jsx'

import MenuLayout from './layouts/MenuLayout'
import Lanzamientos from "./pages/Menu/Lanzamientos";

function App() {
  return (
    <>
      <header className='sticky top-0 self-start z-100'>
        <Navbar />
        <SubNavbar />
      </header>

      <main className="min-h-[calc(100svh-168px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuLayout />}>
            <Route path="lanzamientos" element={<Lanzamientos />} />
          </Route>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>

      <Cookies />
    </>
  );
}

export default App;