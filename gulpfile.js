var Promise = require('es6-promise').Promise;
var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix) {
    mix.sass('app.scss', 'dist/css');
    mix.browserify('app.js', 'dist/js');
});
