const express = require('express');
const routes = express.Router();

const EstoqueController = require('./controllers/EstoqueController');
const PCsController = require('./controllers/PCsController');
const SCsController = require('./controllers/SCsController');
const EmpController = require('./controllers/EmpController');
const OuController = require('./controllers/OuController');
const OPsController = require('./controllers/OPsController');
const OPCostsController = require('./controllers/OPCostsController');
const RegisterController = require('./controllers/RegisterController');
const ProductController = require('./controllers/ProductController');
const ClientController = require('./controllers/ClientController');
const FatController = require('./controllers/FatController');
const AverageController = require('./controllers/AverageController');
const InputDocsController = require('./controllers/InputDocsController');

routes.get('/estoques', EstoqueController.index);
routes.get('/pcs', PCsController.index);
routes.get('/scs', SCsController.index);
routes.get('/emp', EmpController.index);
routes.get('/ou', OuController.index);
routes.get('/ops', OPsController.index);
routes.get('/op-costs', OPCostsController.index);
routes.get('/register', RegisterController.index);
routes.get('/products', ProductController.index);
routes.get('/clients', ClientController.index);
routes.get('/fat', FatController.index);
routes.get('/average', AverageController.index);
routes.get('/inputdocs', InputDocsController.index);

module.exports = routes;