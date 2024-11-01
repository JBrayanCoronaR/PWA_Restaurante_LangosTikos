import React from "react";
import './Registro.css';

const Registro = () => {
    return(
        <div> 
            <h1 className='titulo-regis'>Registro</h1>
            <hr className="linea-horizontal" />
            <div className="cards-container-re">
                <div className="card-re">
                    <form className="registration-form">
                        <div className="form-group">
                            <label htmlFor="fullname">Nombre Completo: </label>
                            <input type="text" id="fullname" placeholder="Escribe tu nombre completo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" placeholder="Escribe tu email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono: </label>
                            <input type="tel" id="phone" placeholder="Escribe tu teléfono" />
                        </div>
                        <button type="submit" className="register-button">Registrar</button>
                    </form>
                </div>
            </div>
            <p className="footer-text"> {/* Aquí puedes poner tu texto */} 
                Debes registrarte si deseas realizar una reservación.
            </p>
            <br />
        </div>
    );
};

export default Registro;