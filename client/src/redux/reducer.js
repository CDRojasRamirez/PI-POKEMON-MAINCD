import { GET_ALL_POKEMONS, BACK, NEXT } from "./action-type"


const initialState = {
    Poke120: [],
    AllPokemons: [],
    currentPage: 1,
    pokemonsPerPage: 12
};
// Función auxiliar para paginar los Pokémones
const paginatePokemons = (pokemons, currentPage, pokemonsPerPage) => {
    const startIndex = (currentPage - 1) * pokemonsPerPage;
    const endIndex = startIndex + pokemonsPerPage;
    return pokemons.slice(startIndex, endIndex);
};


export const reducer = (state = initialState, action) => {

    switch(action.type){

        case GET_ALL_POKEMONS:

            state.Poke120 = action.payload
            const paginatedPokemons = paginatePokemons(state.Poke120, state.currentPage, state.pokemonsPerPage);
            return {
                ...state,
                AllPokemons: paginatedPokemons,
            };
        
            case BACK:
                if (state.currentPage > 1) {
                    const prevPage = state.currentPage - 1;
                    const paginatedPokemons = paginatePokemons(state.Poke120, prevPage, state.pokemonsPerPage);
                    return {
                        ...state,
                        currentPage: prevPage,
                        AllPokemons: paginatedPokemons
                    };
                } else {
                    alert('Initial Page');
                    return state;
                }
            
                case NEXT:
                    
                    if (state.currentPage < 10) {
                        try {
                            const nextPage = state.currentPage + 1;
                            const paginatedPokemons = paginatePokemons(state.Poke120, nextPage, state.pokemonsPerPage);
                            return {
                                ...state,
                                currentPage: nextPage,
                                AllPokemons: paginatedPokemons
                            }
                           } catch (error) {
                            console.log(error);
                           }
                        } else {
                        alert('Final Page');
                        return state;
                    }
                    break
                
        default: return {
            ...state
        }
    }
}