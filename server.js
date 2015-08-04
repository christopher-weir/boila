'use strict';

/**
 * Module dependencies.
 */
var config      = require('./config/config');
var express     = require('./config/lib/express');



// Initialize express
var app = express.init(db);

// Start the app by listening on <port>
app.listen(config.port);

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);