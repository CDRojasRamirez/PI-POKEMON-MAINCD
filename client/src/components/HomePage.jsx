
import Select from "../utils/Select/Select";
import Pokemons from "./Pokemons/Pokemons";
import style from './HomePage.module.css'
import Footer from "../utils/Footer/Footer";
import ErrorBoundary from "../ErrorBoundary";
import Paginado from "../utils/Paginado/Paginado";

const HomePage = ({AllPokemons, PokemonsFiltereds}) => {


  
  return (
    <div className={style.HomePage} style={{ overflowX: 'hidden', height: '100vh', overflowY: "auto" }}>
      <Select />
      <Paginado />
      <Pokemons AllPokemons={AllPokemons} PokemonsFiltereds={PokemonsFiltereds}/>
      
      <ErrorBoundary><Footer /></ErrorBoundary>
    </div>
  );
};

export default HomePage;
