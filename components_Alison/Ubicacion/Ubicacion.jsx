import React from "react";
import './Ubicacion.css';

const Ubicacion = () => {
    return (
        <div>
            <h1 className='titulo-ubi'>Nuestra Ubicacion</h1>
            <hr className="linea-horizontal" />
            <img src="/images/Maps.png" alt="Ubicación del restaurante" className="imagen-ubicacion" />
            {/* <div className="carousel">
                
                <img src="/ruta/a/tu/imagen1.jpg" alt="Imagen 1" />
                <img src="/ruta/a/tu/imagen2.jpg" alt="Imagen 2" />
                <img src="/ruta/a/tu/imagen3.jpg" alt="Imagen 3" />
                
            </div> */}
            <p className='texto-ubicacion'>
            Omega 252, Las Arboledas, 38640. Acámbaro, Gto.
            </p>
            <br />
        </div>
    );
};

export default Ubicacion;