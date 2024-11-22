import React from 'react';
import './SplashScreen.css'; 
import logo from './LangosTikos_Ne.png';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img className='splash-logo' src={logo} alt='logotipo'/>
      <h1 className="splash-Titulo"><b><i>Restaurante "LangosTiko´s"</i></b></h1>
    </div>
  );
}

export default SplashScreen;