const axios = require('axios')
const { Pokemons, Types } = require('../db')

const getAllPokemonsC = async () => {

try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=144")
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
    const nameApi = name.toLowerCase();
    let PokeAll = await Pokemons.findAll({
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const PokeDb =  PokeAll.filter(e => e.name.toLowerCase() === nameApi)
    
    if(PokeDb.length > 0) return PokeDb

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameApi}`);
    const poke = response.data;

    const PokeApi = [{
      id: poke.id,
      name: poke.name,
      hp: poke.stats[0].base_stat,
      attack: poke.stats[1]?.base_stat,
      defense: poke.stats[2]?.base_stat,
      speed: poke.stats[5]?.base_stat,
      height: poke.height,
      weight: poke.weight,
      image: poke.sprites.versions["generation-v"]["black-white"].front_default,
      types: poke.types?.map((e) => {
        return { name: e.type.name };
      }),
    }];

    return PokeApi

  } catch (error) {
    console.log(error);
  }
};

const postPokemonC = async (name, hp, attack, defense, speed, height, weight, image, types) => {
  try {
    const findPokemon = await Pokemons.findOne({
      where: { name: name.toLowerCase() },//ver esto de lowerCase
    });//Solo se fija si existe entre los creados
    if (findPokemon) {
      return alert("Pokemon already exists");
    } else {
      let newPokemon = await Pokemons.create({
        name: name.toLowerCase(),
        image: image,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
      });
      let pokemonType = await Types.findAll({
        where: {
          name: types,
        },
      });
      const PokemonCreatedTypes = await newPokemon.addTypes(pokemonType);

      return newPokemon
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllPokemonsC, getByIdC, getByNameC, postPokemonC }