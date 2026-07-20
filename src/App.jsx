import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'
import Home from './pages/Home/index.jsx'
import Footer from './components/Footer.jsx'

import MenuLayout from './layouts/MenuLayout'
import Lanzamientos from "./pages/Menu/Lanzamientos";
import Promociones from "./pages/Menu/Promociones";
import NotFound from "./pages/Menu/NotFound";

import Cookies from './components/Cookies.jsx'
import FloatButtons from './components/FloatButtons.jsx'

function App() {

  const menuItems = [
    { name: "Lanzamientos", path: "lanzamientos" },
    { name: "Promociones", path: "promociones" },
    { name: "Desayunos", path: "desayunos" },
    { name: "Tardes Santafereñas", path: "tardes-santafereñas" },
    { name: "Para seguir el día", path: "para-seguir-el-dia" },
    { name: "Acompañamientos", path: "acompanamientos" },
    { name: "Antojos", path: "antojos" },
    { name: "Tortas y Ponqués", path: "tortas-y-ponqués" },
    { name: "Panes para la mesa", path: "panes-para-la-mesa" },
    { name: "Panes para ensamble", path: "panes-para-ensamble" },
  ];

  return (
    <>
      <header className='sticky top-0 self-start z-50'>
        <Navbar />
        <SubNavbar />
      </header>

      <main className="min-h-[calc(100svh-168px)]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<MenuLayout menuItems={menuItems} />}>
            <Route path="lanzamientos" element={<Lanzamientos />} />
            <Route path="promociones" element={<Promociones />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/menu/not-found" />} />
          </Route>
        </Routes>
        
        <FloatButtons />
      </main>

      <footer>
        <Footer />
      </footer>

      <Cookies />
    </>
  );
}

export default App;