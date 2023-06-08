import React, { useEffect, useState } from 'react';
import PokemonsCard from '../PokemonsCard/PokemonsCard';
import style from './Pokemons.module.css';
import ErrorBoundary from '../../ErrorBoundary';
import Loader from '../../utils/Loader/Loader';



const Pokemons = ({ AllPokemons, PokemonsFiltereds }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPokemonList(AllPokemons);
      setIsLoading(false);
    }, 500);
  }, [AllPokemons]);

  return (
    <>
      <div className={style.PokemonsContain}>
        <div className={style.Pokemons}>
          {isLoading ? (
            <Loader />
          ) : (
            <ul className={style.PokemonsGrid}>
              {PokemonsFiltereds.length > 0 ? (
                PokemonsFiltereds.map((e) => {
                  return (
                    <ErrorBoundary key={e?.id}>
                      <PokemonsCard
                        id={e?.id}
                        name={e?.name}
                        image={e?.image}
                        hp={e?.hp}
                        attack={e?.attack}
                        defense={e?.defense}
                        speed={e?.speed}
                        height={e?.height}
                        weight={e?.weight}
                        types={e?.types}
                      />
                    </ErrorBoundary>
                  );
                })
              ) : PokemonsFiltereds.length === 0 ? (
                pokemonList.map((e) => {
                  return (
                    <ErrorBoundary key={e?.id}>
                      <PokemonsCard
                        id={e?.id}
                        name={e?.name}
                        image={e?.image}
                        hp={e?.hp}
                        attack={e?.attack}
                        defense={e?.defense}
                        speed={e?.speed}
                        height={e?.height}
                        weight={e?.weight}
                        types={e?.types}
                      />
                    </ErrorBoundary>
                  );
                })
              ) : (
                pokemonList.map((e) => {
                  return (
                    <ErrorBoundary key={e?.id}>
                      <PokemonsCard
                        id={e?.id}
                        name={e?.name}
                        image={e?.image}
                        hp={e?.hp}
                        attack={e?.attack}
                        defense={e?.defense}
                        speed={e?.speed}
                        height={e?.height}
                        weight={e?.weight}
                        types={e?.types}
                      />
                    </ErrorBoundary>
                  );
                })
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Pokemons;