import './App.css';
import LandingPage from './components/LandingPage';
import { Switch, Route, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage';
import ErrorBoundary from './ErrorBoundary';
import Nav from './components/Nav/Nav';
import DetailPage from './components/DetailPage/DetailPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPokemons } from './redux/action';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';

function App() {

  const dispatch = useDispatch()
  const location = useLocation()
  
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])  
  const { AllPokemons, PokemonsFiltereds } = useSelector(state => state)

  return (
    <div className="App">
      { location.pathname === '/' ? <LandingPage /> : <Nav /> }
      <Switch>
        <Route path='/home' ><ErrorBoundary><HomePage AllPokemons={AllPokemons} PokemonsFiltereds={PokemonsFiltereds}/></ErrorBoundary></Route>
        <Route path='/detail/:id' ><ErrorBoundary><DetailPage /></ErrorBoundary></Route>
        <Route path='/create' ><CreatePokemon /></Route>
      </Switch>
    </div>
  );
}

export default App;
