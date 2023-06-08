import React, { useState, useEffect, useRef } from "react";
import style from "./Nav.module.css";
import musicPokemon from "../../sounds/Pokemon.mp3";
import { Link, useLocation } from "react-router-dom";
import { searchBar } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const location = useLocation();
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
      <Link to="/" className={style.Link}>
        <div className={style.childNavLogo}>Daniel's pokemon</div>
      </Link>
      <div className={style.childNav}>
        <input
          type="text"
          name="pokemonsName"
          value={namePokemon}
          onChange={handleSearchBar}
          placeholder="Enter a pokemon name"
          onKeyDown={handleKeyDown}
          className={style.inputName}
        />
        <button
          onClick={handleBtnSearch}
          disabled={isSearchButtonDisabled}
          className={style.inputBtn}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={style.iconLupa}
          />
        </button>
      </div>
      <div className={style.childNavHCA}>
        {location.pathname === "/home" ? (
          <Link to="/home" className={style.Link}>
            <div className={style.childNavOption} style={{ color: "#ffb507" }}>
              Home
            </div>
          </Link>
        ) : (
          <Link to="/home" className={style.Link}>
            <div className={style.childNavOption} style={{ color: "white" }}>
              Home
            </div>
          </Link>
        )}
        {/* <div className={style.childNavOption}>About</div>
        <div className={style.childNavOption}>My pokemons</div> */}
        {location.pathname === "/create" ? (
          <Link to="/create" className={style.Link}>
            <div className={style.childNavOption} style={{ color: "#ffb507" }}>
              Create
            </div>
          </Link>
        ) : (
          <Link to="/create" className={style.Link}>
            <div className={style.childNavOption} style={{ color: "white" }}>
              Create
            </div>
          </Link>
        )}
        <div className={style.childNavOption}>
          <audio ref={audioRef} src={musicPokemon} />{" "}
          {/* Elemento de audio con la referencia y la ruta del archivo de música */}
          <button
            onClick={handleMusicButtonClick}
            className={`${style.btnMusic} ${
              isMusicPlaying ? style.greenButton : style.redButton
            }`}
          >
            {isMusicPlaying ? "Stop 🎵" : "Play 🎵"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
