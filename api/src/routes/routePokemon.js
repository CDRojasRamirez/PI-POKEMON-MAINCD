const { Router } = require('express');
const routePokemon = Router()
const { getAllPokemonsH, getByIdH, getByNameH, postPokemonH } = require('../handlers/handlePokemon')

routePokemon.get('/name', getByNameH)
routePokemon.get('/:idPokemon', getByIdH)
routePokemon.get('', getAllPokemonsH)

routePokemon.post('', postPokemonH)

module.exports = routePokemon;