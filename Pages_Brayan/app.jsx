//import './bootstrap';
//import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});


import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import logo1 from './src/NavBar/LangosTikos_Ne.png';
import Home from './src/Home/Home';
import Conocenos from './src/Conocenos/Conocenos';
import Menu from './src/Menu/Menu';
import Ubicacion from './src/Ubicacion/Ubicacion';
import Registro from './src/Registro/Registro';

import { useEffect  } from 'react';
import SplashScreen from './src/SplashScreen/SplashScreen';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de recursos (puedes ajustar el tiempo o cargar recursos reales)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }


  return (
    <>
      <div className="App">
          {loading ? <SplashScreen /> :''}
      </div>
      <div className="App">
        <Router> 
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={logo1} alt="Logo del Restaurante" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
              <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
              <li><Link to="/Menu" onClick={toggleMenu}>Menú</Link></li>
              <li><Link to="/Conocenos" onClick={toggleMenu}>Nosotros</Link></li>
              <li><Link to="/Ubicacion" onClick={toggleMenu}>Ubicación</Link></li>
              <li><Link to="/Registro" onClick={toggleMenu}>Reservas</Link></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Conocenos" element={<Conocenos />} />
            <Route path="/Ubicacion" element={<Ubicacion />} />
            <Route path="/Registro" element={<Registro />} />
          </Routes>
        </Router>
      </div>

      <div className="footer-text">
        <p><b>Restaurate LangosTiko´s ©2024</b>
          <br />Omega 252, Las Arboledas, 38640. Acámbaro, Gto.
          <br />langostikos2014@gmail.com
          <br />417 172 3877
        </p>
      </div>
    </>
  );
}

export default App;