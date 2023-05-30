import PokemonsCard from "../PokemonsCard/PokemonsCard";
import style from './Pokemons.module.css'
import ErrorBoundary from "../../ErrorBoundary";

const Pokemons = ({ AllPokemons }) => {
    return (
      <ul className={style.PokemonsGrid}>
          { AllPokemons && AllPokemons?.map(e => {

          return <ErrorBoundary>
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
          }) }
      </ul>
    );
  };
  
  export default Pokemons;
  