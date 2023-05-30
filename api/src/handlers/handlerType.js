const axios = require('axios'); 
const { Types, Pokemons } = require('../db');

const getTypes = async (req, res) => {
    try{
        const urlTypes = await axios.get('https://pokeapi.co/api/v2/type');
        const allTypes = urlTypes.data.results;
        allTypes.forEach( e => {
            return Types.findOrCreate({
                where: {
                    name: e.name, 
                },
            });
        });

        const dbTypes = await Types.findAll();

        res.status(200).json(dbTypes);
    }catch(error){
        res.status(404).json({error: error.message})
    };
};

module.exports = {
    getTypes
};




  