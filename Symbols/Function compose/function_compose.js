let compose = Symbol();
Function.prototype[compose] = function (param) {

    var result1 = this;
    var result2 = param;

    return function (result) {
        result = result2.call(this, result);
        result = result1.call(this, result);
        console.log(result);
        return result;
    };
};

let roundedAbs = Math.round[compose](Math.abs);
console.log(roundedAbs(-5.5));