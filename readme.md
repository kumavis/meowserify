# meowserify

Need a browserify bundle in your browserify bundle?
Useful for webworkers, iframes.


```js
var meowserify = require('meowserify');

var result = meowserify(__dirname + '/worker.js');
eval(result)
```

will be replaced with

```js

var meowserify = require('meowserify');

var result = "(function e(t,n,r){function  ..."
eval(result)
```