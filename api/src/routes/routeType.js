const { Router } = require('express');
const routeType = Router()
const { getTypes } = require('../handlers/handlerType')

routeType.get('', getTypes)

module.exports = routeType;