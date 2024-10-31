import React from 'react';
import './NavBar.css';
import logo from './LangosTikos_Ne.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo del Restaurante" />
            </div>
            <ul className="navbar-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Menú</a></li>
                <li><a href="#">Ubicación</a></li>
                <li><a href="#" className="contact-button">Contacto</a></li> {/* Clase especial para Contacto */}
            </ul>
        </nav>
    );
};

export default Navbar;