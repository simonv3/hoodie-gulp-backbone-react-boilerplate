'use strict';

// TODO: This is commented out because it still has to be refactored
// require('./login.js');

// initialize Hoodie

var hoodie = new Hoodie();

var models = require('./models/models.js');

var BoilerPlate = require('./views/BoilerPlate.jsx');

React.render(<BoilerPlate hoodie={hoodie}/>, document.body);
