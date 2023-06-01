import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <>
    <Link to='/home'>
    <div className={style.containLanding}>
      <h1 className={style.titulo}>DANIEL'S POKEMON</h1>
      <h3 className={style.info}>Click on the screen to start</h3>
      <div className={style.containGif}>
        
      </div>
    </div>
    </Link>
    </>
  );
};

export default LandingPage;
