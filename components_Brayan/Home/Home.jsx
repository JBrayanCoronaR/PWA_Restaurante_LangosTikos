import React from "react";
import './Home.css';
import platilloImage from './Platillo.png'; // Reemplaza con la ruta de tu imagen

const Home = () => {
    return (
        <div className="home-container">
            <div className="overlay"></div>
            <div className="content">
                <div className="text-container">
                    <h1 className="promo-text">
                        ¡Aproveche grandes ofertas en <span className="highlight">Comidas Deliciosas!</span>
                    </h1>
                </div>
                <img src={platilloImage} alt="Platillo Delicioso" className="platillo-image" />
            </div>
        </div>
    );
};

export default Home;