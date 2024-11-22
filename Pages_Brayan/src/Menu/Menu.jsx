import React from 'react';
import './Menu.css';

const Menu = () => {
    const dishes = [
        { id: 1, name: 'ORDEN DE TACOS DE PESCADO CAPEADO', available: true, imgSrc: '/images/tacos1.jpg' },
        { id: 2, name: 'CÓCTEL DE CAMARÓN', available: false, imgSrc: '/images/coctelcama.jpg' },
        { id: 3, name: 'FILETE EMPANIZADO', available: true, imgSrc: '/images/Filete.jpeg' },
        { id: 4, name: 'MOLCAJETE', available: true, imgSrc: '/images/Molcajete.jpg' }, // Ejemplo de plato adicional
        // Agrega más platos según sea necesario
    ];


    const dishes2 = [
        { id: 1, name: 'Plato 1', available: true, imgSrc: '/images/Plato1.jpg' },
        { id: 2, name: 'Plato 2', available: false, imgSrc: '/images/Plato1.jpg' },
        { id: 3, name: 'Plato 3', available: true, imgSrc: '/images/Plato1.jpg' },
        
    ];

    return (
        <>
            <div>
                <h2 className="menu-title">Platillos</h2>
                <hr className="menu-divider" />
                <div className="dish-cards">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="card">
                            <div className="image-container">
                                <img src={dish.imgSrc} alt={dish.name} />
                            </div>
                            <div className="card-content">
                                <h3>{dish.name}</h3>
                                <p>{dish.available ? 'Disponible' : 'No disponible'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;