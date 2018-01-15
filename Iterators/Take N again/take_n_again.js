function integers() {
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
    console.log(elt)