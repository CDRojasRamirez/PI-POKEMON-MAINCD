
import Select from "../utils/Select/Select";
import Pokemons from "./Pokemons/Pokemons";


const HomePage = ({AllPokemons}) => {

  
  
  return (
    <div className="home-page">
      {console.log(AllPokemons)}
      <Select />
      <Pokemons AllPokemons={AllPokemons}/>
    </div>
  );
};

export default HomePage;
