import React from "react";
import './Registro.css';

const Registro = () => {
    return (
        <>
            <div>
                <h1 className='titulo-ubi'>Nuestras Mesas</h1>
                <hr className="linea-horizontal" />
                <img src="/images/Mesas.jpg" alt="Ubicación del restaurante" className="imagen-ubicacion" />
                <img src="/images/Mesas2.jpg" alt="Ubicación del restaurante" className="imagen-ubicacion" />
                {/* <div className="carousel">
                    
                    <img src="/ruta/a/tu/imagen1.jpg" alt="Imagen 1" />
                    <img src="/ruta/a/tu/imagen2.jpg" alt="Imagen 2" />
                    <img src="/ruta/a/tu/imagen3.jpg" alt="Imagen 3" />
                    
                </div> */}
                <p className='texto-ubicacion'>
                Si deseas realizar una reservación, contáctanos por correo langostikos2014@gmail.com o llama al 417 172 3877.
                <br />
                Con gusto te atenderemos.
                </p>
                <br />
            </div>
            {/* <div>
                <video width="25%" controls >
                    <source src={${process.env.PUBLIC_URL}/Camarones.mp4} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div> */}
        </>
    );
};

export default Registro;