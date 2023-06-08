import { GET_ALL_POKEMONS, NEXT, BACK, ORDER_AD, ORDER_TYPE, ORDER_APIDB, RESET, CREATE_POKEMON, SEARCH_BAR, ORDER_ATTACK, ORDER_AZ } from "./action-type";
import axios from "axios";

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const pokemonsApi = (await axios.get("http://localhost:3005/pokemon")).data;

      dispatch({ type: GET_ALL_POKEMONS, payload: pokemonsApi });
    } catch (error) {
      console.error("Error al obtener los pokemons:", error);
    }
  };
};

export const next = () => {

  return { type: NEXT }
}
export const back = () => {

  return { type: BACK }
}

export const orderAD = (AscDesc) => {

  return { type: ORDER_AD, payload: AscDesc}
}
export const orderAZ = (AzA) => {

  return { type: ORDER_AZ, payload: AzA}
}
export const orderType = (typePokemon) => {

  return { type: ORDER_TYPE, payload: typePokemon }
}
export const orderApiDb = (ApiDb) => {

  return { type: ORDER_APIDB, payload: ApiDb}
}
export const orderAttack = (attack) => {

  return { type: ORDER_ATTACK, payload: attack}
}

export const reset = () => {

  return { type: RESET}
}

export const createPokemonR = (datita) => {

  return async (dispatch) => {

    const res = (await axios.post('http://localhost:3005/pokemon', datita)).data
    dispatch({ type: CREATE_POKEMON, payload: res })
  }
}

export const searchBar = (name) => {

    return async (dispatch) => {
      const res = await axios.get(`http://localhost:3005/pokemon/name?name=${name}`);
      dispatch({ type: SEARCH_BAR, payload: res.data });
    };
};
