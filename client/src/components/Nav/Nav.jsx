import React, { useState, useEffect, useRef } from "react";
import style from "./Nav.module.css";
import musicPokemon from "../../sounds/Pokemon.mp3";

const Nav = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null); // Referencia al elemento de audio

  useEffect(() => {
    const audio = audioRef.current; // Obtiene el elemento de audio

    const playMusic = () => {
      audio.play().catch((error) => { // Reproduce la música
        console.log("Error al reproducir la música:", error);
        setIsMusicPlaying(false); // Maneja el error de reproducción
      });
    };

    const pauseMusic = () => {
      audio.pause(); // Pausa la música
    };

    if (isMusicPlaying) {
      playMusic(); // Si la música debe estar reproduciéndose, llama a la función de reproducción
    } else {
      pauseMusic(); // Si la música no debe estar reproduciéndose, llama a la función de pausa
    }
  }, [isMusicPlaying]); // Se ejecuta cuando cambia el estado de reproducción de música

  const handleMusicButtonClick = () => {
    setIsMusicPlaying(!isMusicPlaying); // Cambia el estado de reproducción de música al hacer clic en el botón
  };

  return (
    <div className={style.containNav}>
      <div className={style.childNav}>Logo</div>
      <div className={style.childNav}>SearchBar</div>
      <div className={style.childNav}>Home</div>
      <div className={style.childNav}>About</div>
      <div className={style.childNav}>Form</div>
      <div className={style.childNav}>
        <audio ref={audioRef} src={musicPokemon} /> {/* Elemento de audio con la referencia y la ruta del archivo de música */}
        <button onClick={handleMusicButtonClick}>
          {isMusicPlaying ? "Stop Music" : "Play Music"} {/* Texto del botón dependiendo del estado de reproducción de música */}
        </button>
      </div>
    </div>
  );
};

export default Nav;
