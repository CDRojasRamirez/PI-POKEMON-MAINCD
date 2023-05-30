import { GET_ALL_POKEMONS } from "./action-type"


const initialState = {
    AllPokemons: []
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case GET_ALL_POKEMONS: return {
            ...state,
            AllPokemons: action.payload
        }
        default: return {
            ...state
        }
    }
}