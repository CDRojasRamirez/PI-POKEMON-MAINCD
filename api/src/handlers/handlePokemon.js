const { getAllPokemonsC, getByIdC, getByNameC } = require('../controllers/controllersPokemon')
const { Pokemons, Types } = require('../db')

const getAllPokemonsH = async (req, res) => {

    try {

        const apiPokemons = await getAllPokemonsC()
        res.status(200).json(apiPokemons)
        } catch (error) {
        res.status(404).json({error: error.message})
    }

}

const getByIdH = async (req, res) => {

    const { idPokemon } = req.params

    try {

        const apiPokemonsById = await getByIdC(idPokemon)
        res.status(200).json(apiPokemonsById)
        
        } catch (error) {
        res.status(404).json({error: error.message})
    }

}

const getByNameH = async (req, res) => {

    try {
        const { name } = req.query;
         const apiPokemonsByName = await getByNameC(name)
         res.status(200).json(apiPokemonsByName)

        } catch (error) {
        res.status(404).json({error: error.message})
    }

}


const postPokemonH = async (req, res) => {
    try {
      const { name, hp, attack, defense, speed, height, weight, image, types } = req.body;
      const findPokemon = await Pokemons.findOne({
        where: { name: name.toLowerCase() },//ver esto de lowerCase
      });//Solo se fija si existe entre los creados
      if (findPokemon) {
        res.send("Pokemon already exists");
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
        const PokemonCreated = await newPokemon.addTypes(pokemonType);
        res.status(200).json(PokemonCreated)//esto hace falta? , no me hizo falta pero en un momento me salio  , no creo pokemon porque no quiero xD
        //.json(newPokemon); // esto no hace falta por eso lo comento 
  
        // await newPokemon.setTypes(pokemonType);
        // res.send("Pokemon Created");
      }
    } catch (error) {
      res.status(404).json({error:error.message})
    }
  };
  

module.exports = { getAllPokemonsH, getByIdH, getByNameH, postPokemonH}