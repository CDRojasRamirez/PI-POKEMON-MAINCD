
import { useDispatch, useSelector } from "react-redux";
import Select from "../utils/Select/Select";
import Pokemons from "./Pokemons/Pokemons";
import { back, next } from "../redux/action";


const HomePage = ({AllPokemons}) => {

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
      {console.log(AllPokemons)}
      <Select />
      <button onClick={handleBack}>Back</button>
      <label htmlFor="">Page: {currentPage} </label>
      <button onClick={handleNext}>Next</button>
      <Pokemons AllPokemons={AllPokemons}/>
    </div>
  );
};

export default HomePage;
