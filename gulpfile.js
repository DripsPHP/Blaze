var Promise = require('es6-promise').Promise;
var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix) {
    mix.sass('blaze.scss', 'dist/css');
    mix.browserify('blaze.js', 'dist/js');
});
