/*function startNode(type, value, options) {
    return{
        type,
        value,
        [options.sourceProperty]: options.sourceValue
    }
}*/

const startNode = (type, value, options) => ({
    type,
    value,
    [options.sourceProperty]: options.sourceProperty
});

console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}));