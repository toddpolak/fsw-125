const math = require('./math')
const num1 = 144
const num2 = 17
const num3 = 4
const num4 = 5
const num5 = 6
const num6 = 7

console.log(`The sum of ${num1} and ${num2} is ${math.add(num1, num2)}`)

console.log(`${num1} minus ${num2} is ${math.subtract(num1, num2)}`)

console.log(`${num1} multiplied by ${num2} is ${math.multiply(num1, num2)}`)

console.log(`${num1} divided by ${num2} is ${math.divide(num1, num2)}`)

console.log(`The square root of ${num1} is ${math.squareRoot(num1)}`)

console.log(`The area of a triangle with sides ${num4}, ${num5} and ${num6} is ${math.areaOfTriangle(num4, num5, num6)}`)
