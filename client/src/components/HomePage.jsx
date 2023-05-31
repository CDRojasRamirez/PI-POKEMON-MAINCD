
import { useDispatch, useSelector } from "react-redux";
import Select from "../utils/Select/Select";
import Pokemons from "./Pokemons/Pokemons";
import { back, next } from "../redux/action";
import style from './HomePage.module.css'


const HomePage = ({AllPokemons, PokemonsFiltereds}) => {

  const dispatch = useDispatch()
  const { currentPage } = useSelector(state => state)
  
  const handleBack = () => {

    dispatch(back())

  }
  const handleNext = () => {

    dispatch(next())

  }
  
  return (
    <div className="home-page">
      
      <div className={style.paginado}>
        <button onClick={handleBack}>⪻ Back</button>
        <label htmlFor="">{currentPage} </label>
        <button onClick={handleNext}>Next ⪼</button>
      </div>
      <Select />
      <Pokemons AllPokemons={AllPokemons} PokemonsFiltereds={PokemonsFiltereds}/>
    </div>
  );
};

export default HomePage;
