import PokemonsCard from "../PokemonsCard/PokemonsCard";
import style from "./Pokemons.module.css";
import ErrorBoundary from "../../ErrorBoundary";

const Pokemons = ({ AllPokemons, PokemonsFiltereds }) => {
  return (
    <>
      <div className={style.PokemonsContain}>
        <div className={style.Pokemons}>
          <ul className={style.PokemonsGrid}>
            {PokemonsFiltereds.length > 0
              ? PokemonsFiltereds?.map((e) => {
                  return (
                    <ErrorBoundary>
                      <PokemonsCard
                        key={e?.id}
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
              : PokemonsFiltereds.length === 0
              ? AllPokemons?.map((e) => {
                  return (
                    <ErrorBoundary>
                      <PokemonsCard
                        key={e?.id}
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
              : AllPokemons?.map((e) => {
                  return (
                    <ErrorBoundary>
                      <PokemonsCard
                        key={e?.id}
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
                })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pokemons;
