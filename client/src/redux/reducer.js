import { GET_ALL_POKEMONS, BACK, NEXT, ORDER_AD, ORDER_TYPE, ORDER_APIDB, RESET, CREATE_POKEMON, SEARCH_BAR } from "./action-type"


const initialState = {
    Poke120: [], //los 120 pokemons
    AllPokemons: [], //pokemons por pagina
    PokemonsFiltereds: [],
    currentPage: 1,
    pokemonsPerPage: 10,
    PokemonCreated: {}
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
                PokemonsFiltereds: []
            };
        
           /****************************************** PAGINADO ***********************************************/

           case BACK:
            if (state.currentPage > 1) {
                const prevPage = state.currentPage - 1;
                const paginatedPokemons = paginatePokemons(state.Poke120, prevPage, state.pokemonsPerPage);
                return {
                    ...state,
                    PokemonsFiltereds: [],
                    currentPage: prevPage,
                    AllPokemons: paginatedPokemons
                };
            } else {
                alert('Initial Page');
                return state;
            }
        
            case NEXT:
                
                if (state.currentPage < 12) {
                    try {
                        const nextPage = state.currentPage + 1;
                        const paginatedPokemons = paginatePokemons(state.Poke120, nextPage, state.pokemonsPerPage);
                        return {
                            ...state,
                            PokemonsFiltereds: [],
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
                break;

                /****************************************** FILTROS ***********************************************/

                case ORDER_AD: 

                if(action.payload === 'desc'){
                    return {
                        ...state,
                        PokemonsFiltereds: state.AllPokemons.sort((a,b) => b.id - a.id)
                    }
                }else if(action.payload === 'asc'){
                    return {
                        ...state,
                        PokemonsFiltereds: state.AllPokemons.sort((a,b) => a.id - b.id)
                    }
                }
                break;

                case ORDER_TYPE: 

                const filteredType = state.AllPokemons.filter(e => {
                    return e.types.some((i) => i.name === action.payload)
                })
                console.log(filteredType)
                if(filteredType.length === 0) { 
                    alert('Non-existent pokemon of this type')
                    return {
                        ...state,
                        PokemonsFiltereds: filteredType
                    }
                }else{
                    return {
                        ...state,
                        PokemonsFiltereds: filteredType
                    }
                }
                
                case ORDER_APIDB: 

                const isDbSelected = action.payload === "db";
                 const filteredCharacters = state.AllPokemons.filter((char) => {
                return isDbSelected
                 ? isNaN(Number(char?.id))
                : !isNaN(Number(char?.id));
                });
                return {
                    ...state,
                    PokemonsFiltereds: [...filteredCharacters]
                }

                case RESET: 
                return {
                    ...state,
                    PokemonsFiltereds: [],
                    PokemonsFiltereds: state.AllPokemons.sort((a,b) => a.id - b.id)

                }

                /****************************************** CREATE POKEMON ***********************************************/

                case CREATE_POKEMON: 
                return {
                    PokemonCreated: action.payload
                }

                /****************************************** SEARCH BAR ***********************************************/

                case SEARCH_BAR: 
                console.log(action.payload)
                    if(action.payload){
                        return {
                            ...state,
                            PokemonsFiltereds: action.payload
                        }
                    }else{
                        alert("Pokemon not foun")
                        return
                    }
                
            
        default: return {
            ...state
        }
    }
}