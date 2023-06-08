import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import style from './DetailPage.module.css';
import LoaderDetail from '../../utils/LoaderDetail/LoaderDetail';

const DetailPage = () => {
  const { id } = useParams();
  const [pokemonById, setPokemonById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const detailRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/pokemon/${id}`);
        setPokemonById(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    // Simulating a delay of 1 second before fetching data
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    // Clean up the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timeout);
  }, [id]);

  const handleBounceAnimation = () => {
    detailRef.current.classList.add(style.bounce);
  };

  return (
    <>
      <div className={style.DetailGrid}>
        {isLoading ? (
          <LoaderDetail />
        ) : (
          <>
            <Link className={style.Back} to="/home">
              ⋘ Back
            </Link>
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
                    <img src={pokemon.image} alt={pokemon.name} className={style.image} />
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
                      TYPE:{' '}
                      {pokemon.types &&
                        pokemon.types.map((type, index) => {
                          return (
                            <span key={type.name}>
                              {type.name}
                              {index !== pokemon.types.length - 1 ? ', ' : ''}
                            </span>
                          );
                        })}
                    </p>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default DetailPage;
