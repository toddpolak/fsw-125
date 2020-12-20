const math = require('./math')
const num1 = 188
const num2 = 17

console.log(`The sum of ${num1} and ${num2} is ${math.add(num1, num2)}`)

console.log(`${num1} minus ${num2} is ${math.subtract(num1, num2)}`)

console.log(`${num1} multiplied by ${num2} is ${math.multiply(num1, num2)}`)

console.log(`${num1} divided by ${num2} is ${math.divide(num1, num2)}`)
