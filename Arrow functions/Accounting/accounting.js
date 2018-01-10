const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

let totalMachineValue = inventory.reduce(function (total, currentValue) {
   if(currentValue.type === "machine"){
       total += currentValue.value;
   }

   return total;
}, 0);

console.log(totalMachineValue);