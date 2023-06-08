const { getAllPokemonsC, getByIdC, getByNameC, postPokemonC } = require('../controllers/controllersPokemon')

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
      
      const newPokemon = await postPokemonC(name, hp, attack, defense, speed, height, weight, image, types)

        res.status(200).json(newPokemon)
        
    } catch (error) {
      res.status(404).json({error:error.message})
    }
  };
  

module.exports = { getAllPokemonsH, getByIdH, getByNameH, postPokemonH}