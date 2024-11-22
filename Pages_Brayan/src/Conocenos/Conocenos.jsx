import React from "react";
import './Conocenos.css';

const Conocenos = () => {
    return (
        <div className="conocenos-container">
            {/* Primera sección */}
            <section className="section">
                <h1 className="titulo-conocenos">¿Quiénes somos?</h1>
                <hr className="linea-horizontal" />
                <p className="texto-seccion">El restaurante “Langos Tiko’s” es una pequeña empresa privada 
                    dedicada al comercio y la gastronomía, ubicada en una zona no muy recurrente de la ciudad, 
                    fue un lugar que en sus primeros años de apertura tuvo mucha importancia en el ámbito de 
                    la gastronomía local, contando con una estructura organizacional horizontal, es decir, 
                    que busca innovación y agilidad en sus operaciones y entre sus departamentos: cocina, 
                    atención al cliente y marketing.</p>
            </section>

            {/* Segunda sección */}
            <section className="section">
                <h1 className="titulo-conocenos">Misión</h1>
                <hr className="linea-horizontal" />
                <p className="texto-seccion">Crear una experiencia inolvidable y de agrado en nuestros cliente, ofreciendo 
                    productos de gran calidad, servicio de confianza, amable y rápido, en un ambiente familiar.</p>
            </section>

            {/* Tercera sección */}
            <section className="section">
                <h1 className="titulo-conocenos">Visión</h1>
                <hr className="linea-horizontal" />
                <p className="texto-seccion">Ser el restaurante de pescados y mariscos con el mayor prestigio de la región Bajio.</p>
            </section>

            {/* Cuarta sección */}
            <section className="section">
                <h1 className="titulo-conocenos">Valores</h1>
                <hr className="linea-horizontal" />
                <p className="texto-seccion">
                    <li>Frescura: Priorizamos el uso de ingredientes frescos y de temporada en cada uno de nuestros platillos.</li>
                    <br /><li>Sostenibilidad: Nos comprometemos a practicar métodos de pesca responsables y a reducir nuestro impacto ambiental.</li>
                    <br /><li>Calidad: Mantenemos los más altos estándares de calidad en la preparación y presentación de nuestros alimentos.</li>
                    <br /><li>Hospitalidad: Valoramos a nuestros clientes y nos esforzamos por ofrecer un servicio excepcional en un ambiente amigable y acogedor.</li>
                    <br /><li>Innovación: Buscamos constantemente nuevas formas de sorprender a nuestros clientes, creando platillos únicos que reflejen la riqueza del océano.</li></p>
            </section>

            {/* Cards de información */}
            <div className="cards-container-cono">
                <div className="card-cono">
                    <div className="card-image">
                        <img src="/images/chef1.jpg" alt="Imagen 1" />
                    </div>
                    <h3 className="card-title">Chef 1</h3>
                    <p className="card-text">Texto de descripción para la primera tarjeta.</p>
                </div>
                <div className="card-cono">
                    <div className="card-image">
                        <img src="/images/chef1.jpg" alt="Imagen 2" />
                    </div>
                    <h3 className="card-title">Chef 2</h3>
                    <p className="card-text">Texto de descripción para la segunda tarjeta.</p>
                </div>
                <div className="card-cono">
                    <div className="card-image">
                        <img src="/images/chef1.jpg" alt="Imagen 3" />
                    </div>
                    <h3 className="card-title">Chef 3</h3>
                    <p className="card-text">Texto de descripción para la tercera tarjeta.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Conocenos;