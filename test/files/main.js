var meowserify = require('meowserify');

var result = meowserify(__dirname + '/simple.js');
eval(result)
