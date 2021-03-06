// app level scripts
var $ = require('jquery');
window.jQuery = $;
var jqueryui = require('jqueryui');
var bs = require('bootstrap-js');

var model = require('./models/player_app.js');
var router = require('./routers/app_router.js')
var view = require('./views/player_app.js');

window.playerModel = new model();
var playerView = new view({ model: window.playerModel });
var playerRouter = new router({ model: window.playerModel });