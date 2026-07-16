import './App.css'

import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Cookies from './components/Cookies.jsx'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <SubNavbar />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>

      <Cookies />
    </>
  );
}

export default App;