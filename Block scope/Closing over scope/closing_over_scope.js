/* //ES6
var callbacks = [];
for (let i = 0; i < 10; i++) {
    callbacks.push(function() { console.log(i) });
}

callbacks[2]();
*/

/* //ES5
var callbacks = [];
for (var i = 0; i < 10; i++) {
    (function (e) {
        callbacks.push( function () {
            console.log(e);
        });
    })(i);
}

callbacks[2]();
*/


