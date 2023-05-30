const axios = require('axios')
const { Pokemons, Types } = require('../db')

const getAllPokemonsC = async () => {

try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const subRequest = response.data.results.map((e) => axios.get(e.url));
        let promiseRequest = await Promise.all(subRequest);
        let pokemonApi = await promiseRequest.map((e) => {
            return {
              id: e.data.id,
              name: e.data.name,
              hp: e.data.stats[0].base_stat,
              attack: e.data.stats[1].base_stat,
              defense: e.data.stats[2].base_stat,
              speed: e.data.stats[5].base_stat,
              height: e.data.height,
              weight: e.data.weight,
              image:
                e.data.sprites.versions["generation-v"]["black-white"]
                  .front_default,
              createInDb: "false",
              types: e.data.types.map((e) => {
                return { name: e.type.name };
              }),
            };
          });

          let pokemonDB = await Pokemons.findAll({
            include: {
              model: Types,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            },
          });

          return [...pokemonDB, ...pokemonApi]

} catch (error) {
    res.status(404).json({error: error.message})
}

}

const getByIdC = async (idPokemon) => {
    try {
        if (idPokemon.length < 5) {
            let pokemonApi = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
            );
            let pokemonByIdApi = [
              {
                id: pokemonApi.data.id,
                name: pokemonApi.data.name,
                hp: pokemonApi.data.stats[0].base_stat,
                attack: pokemonApi.data.stats[1].base_stat,
                defense: pokemonApi.data.stats[2].base_stat,
                speed: pokemonApi.data.stats[5].base_stat,
                height: pokemonApi.data.height,
                weight: pokemonApi.data.weight,
                image:
                  pokemonApi.data.sprites.versions["generation-v"]["black-white"]
                    .front_default,
                createInDb: "false",
                types: pokemonApi.data.types.map((e) => {
                  return { name: e.type.name };
                }),
              },
            ];
            return pokemonByIdApi
        } else {
            let pokemon = await Pokemons.findAll({
                include: {
                  model: Types,
                  attributes: ["name"],
                  through: {
                    attributes: [],
                  },
                },
              });
              let pokemonIdDb = pokemon.filter((e) => e.id === idPokemon);
              return pokemonIdDb;
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getByNameC = async (name) => {
    try {
        if (name) {
          const pokeByName = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          if (pokeByName) {
            return {
              id: pokeByName.data.id,
              name: pokeByName.data.name,
              hp: pokeByName.data.stats[0].base_stat,
              attack: pokeByName.data.stats[1].base_stat,
              defense: pokeByName.data.stats[2].base_stat,
              speed: pokeByName.data.stats[5].base_stat,
              height: pokeByName.data.height,
              weight: pokeByName.data.weight,
              image:
                pokeByName.data.sprites.versions["generation-v"]["black-white"]
                  .front_default,
              types: pokeByName.data.types.map((e) => {
                return { name: e.type.name };
              }),
            };
          } else {
            return [];
          }
        } else {
          const pokemonsApi = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=45"
          );
          const subRequest = pokemonsApi.data.results.map((e) => axios.get(e.url));
          let promiseRequest = await Promise.all(subRequest);
         
        //   console.log(promiseRequest);
    
          promiseRequest = await promiseRequest.map((e) => {
            return {
              id: e.data.id,
              name: e.data.name,
              hp: e.data.stats[0].base_stat,
              attack: e.data.stats[1].base_stat,
              defense: e.data.stats[2].base_stat,
              speed: e.data.stats[5].base_stat,
              height: e.data.height,
              weight: e.data.weight,
              image:
                e.data.sprites.versions["generation-v"]["black-white"]
                  .front_default,
              createInDb: "false",
              types: e.data.types.map((e) => {
                return { name: e.type.name };
              }),
            };
          });
          return promiseRequest;//retorna el array de pokemons de la api
        }
      } catch (error) {
        console.log(error);
      }
    };

module.exports = { getAllPokemonsC, getByIdC, getByNameC }