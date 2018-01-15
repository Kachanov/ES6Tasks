function* integers() {
    for (let i = 0; ; i++) {
        yield i;
    }
}

function* take(n, iter) {
    for (let i = 0; i < n; i++) {
        yield iter.next().value;
    }
}

for (let elt of take(5, integers())) {
    console.log(elt);
}


/*function integers() {
    let i = 0;
    return {
        next() {
            return {
                value: i++
            }
        },
        [Symbol.iterator]() { return this }}
}

function take(n, iter) {
    var index = 0;
    return {
        next() {
            if (index < n) {
                index++;
                return {
                    done: false,
                    value: iter.next().value
                }
            }else {
                return {
                    done: true
                }
            }

        },
        [Symbol.iterator]() {
            return this
        }
    }
}

for (let elt of take(3, integers()))
    console.log(elt)*/