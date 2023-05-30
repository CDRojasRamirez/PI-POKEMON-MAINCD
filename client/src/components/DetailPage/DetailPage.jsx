import axios from "axios";
import style from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import sonidoRebote from '../../sounds/sonidoRebote.mp3'

const DetailPage = () => {
  const { id } = useParams();
  const [pokemonById, setPokemonById] = useState([]);

  const detailRef = useRef(null);
  const sonidoReb = useRef(new Audio(sonidoRebote));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/pokemon/${id}`);
        setPokemonById(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleBounceAnimation = () => {
    
    detailRef.current.classList.add(style.bounce);
    // sonidoReb.current.play();
  };

  return (
    <>
      <div className={style.DetailGrid}>
        {pokemonById &&
          pokemonById.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className={style.Detail}
                ref={detailRef}
                onAnimationEnd={handleBounceAnimation}
              >
                <h1>{pokemon.name}</h1>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className={style.image}
                />
                <h2>Hp: {pokemon.hp}</h2>
                <div className={style.ContainTotal}>
                  <div className={style.ContainPowers}>
                    <span className={style.attack}>ATTACK {pokemon.attack}</span>
                    <span className={style.defense}>DEFENSE {pokemon.defense}</span>
                    <span className={style.speed}>SPEED {pokemon.speed}</span>
                  </div>
                  <div className={style.ContainPowers}>
                    <span className={style.height}>HEIGHT {pokemon.height}</span>
                    <span className={style.weight}>WEIGHT {pokemon.weight}</span>
                  </div>
                </div>
                <p>
                  TYPE: {pokemon.types &&
                    pokemon.types.map((type, index) => {
                      return (
                        <span key={type.name}>
                          {type.name}
                          {index !== pokemon.types.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default DetailPage;
