import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Cookies from './components/Cookies.jsx'
import MenuLayout from './layouts/MenuLayout'
import Lanzamientos from "./pages/Menu/Lanzamientos";
import Promociones from "./pages/Menu/Promociones";
import NotFound from "./pages/Menu/NotFound";

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
            <Route index element={<Lanzamientos />} />
            <Route path="lanzamientos" element={<Lanzamientos />} />
            <Route path="promociones" element={<Promociones />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/menu/not-found" />} />
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