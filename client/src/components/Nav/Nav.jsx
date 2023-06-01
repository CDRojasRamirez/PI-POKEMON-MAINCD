import React, { useState, useEffect, useRef } from "react";
import style from "./Nav.module.css";
import musicPokemon from "../../sounds/Pokemon.mp3";
import { Link } from "react-router-dom";
import { searchBar } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null); // Referencia al elemento de audio

  const dispatch = useDispatch();
  const { PokemonsFiltereds } = useSelector((state) => state);
  const [namePokemon, setNamePokemon] = useState("");
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  useEffect(() => {
    const audio = audioRef.current; // Obtiene el elemento de audio

    const playMusic = () => {
      audio.play().catch((error) => {
        // Reproduce la música
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

  const handleSearchBar = (e) => {
    const value = e.target.value;
    setNamePokemon(value);
    setIsSearchButtonDisabled(value === ""); // Habilita o deshabilita el botón de búsqueda dependiendo del valor del campo de entrada
  };

  const handleBtnSearch = () => {
   
    dispatch(searchBar(namePokemon));
    setNamePokemon("");
    setIsSearchButtonDisabled(true); // Deshabilita el botón de búsqueda después de hacer clic en él
  };

  const handleKeyDown = (e) => {
  
    if (e.key === "Enter") {
      dispatch(searchBar(namePokemon));
      setNamePokemon("");
      setIsSearchButtonDisabled(true); // Deshabilita el botón de búsqueda después de presionar la tecla Enter
    }
  };

  return (
    <div className={style.containNav}>
      <Link to='/'><div className={style.childNav}>Maestro Pokemon</div></Link>
      <div className={style.childNav}>
        <input
          type="text"
          name="pokemonsName"
          value={namePokemon}
          onChange={handleSearchBar}
          placeholder="Enter a pokemons name"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleBtnSearch} disabled={isSearchButtonDisabled}>
          Buscar
        </button>
      </div>
      <Link to='/home'><div className={style.childNav}>Home</div></Link>
      <div className={style.childNav}>About</div>
      <Link to='/create'><div className={style.childNav}>Create</div></Link>
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
