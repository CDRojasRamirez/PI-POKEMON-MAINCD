import { GET_ALL_POKEMONS, NEXT, BACK, ORDER_AD, ORDER_TYPE, ORDER_APIDB, RESET } from "./action-type";
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
export const orderType = (typePokemon) => {

  return { type: ORDER_TYPE, payload: typePokemon }
}
export const orderApiDb = (ApiDb) => {

  return { type: ORDER_APIDB, payload: ApiDb}
}
export const reset = () => {

  return { type: RESET}
}