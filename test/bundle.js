var test = require('tap').test;
var browserify = require('browserify');

var vm = require('vm');
var path = require('path');

test('bundle a file', function (t) {
    t.plan(1);

    var b = browserify();
    b.add(__dirname + '/files/main.js');
    b.transform(path.dirname(__dirname));

    b.bundle(function (err, src) {
        if (err) t.fail(err);
        vm.runInNewContext(src, { console: { log: log } });
    });

    function log (msg) {
        t.equal('http:', msg);
    }
});
