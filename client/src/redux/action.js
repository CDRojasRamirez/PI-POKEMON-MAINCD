import { GET_ALL_POKEMONS, NEXT, BACK } from "./action-type";
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