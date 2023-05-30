import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Bienvenido a mi Página de Inicio</h1>
      <p>Esta es una página de inicio básica en React.</p>
      <Link to='/home'><button>Comenzar</button></Link>
    </div>
  );
};

export default LandingPage;
