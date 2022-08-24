const numbers = [1,4,4,3,2];

const sortedArray = numbers.sort()

const largest = sortedArray.reduce((previousValue, currentValue) =>{
    return previousValue > currentValue ? previousValue : currentValue

});
const smallest = sortedArray.reduce((previousValue, currentValue) => {
   return previousValue < currentValue ? previousValue : currentValue
});
let average = (largest+smallest)/2
console.log(`Average of given largest and smallest array is ${average}`)

