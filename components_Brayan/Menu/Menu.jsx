import React from 'react';
import './Menu.css';

const Menu = () => {
    const dishes = [
        { id: 1, name: 'Plato 1', available: true, imgSrc: '/images/Plato1.jpg' },
        { id: 2, name: 'Plato 2', available: false, imgSrc: '/images/Plato1.jpg' },
        { id: 3, name: 'Plato 3', available: true, imgSrc: '/images/Plato1.jpg' },
        { id: 4, name: 'Plato 4', available: true, imgSrc: '/images/Plato1.jpg' }, // Ejemplo de plato adicional
        // Agrega más platos según sea necesario
    ];

    return (
        <div>
            <h2 className="menu-title">Entradas</h2>
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
    );
};

export default Menu;