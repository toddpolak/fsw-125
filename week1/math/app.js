const math = require('./math')
const num1 = 144
const num2 = 17
const num3 = 5
const num4 = 6
const num5 = 7

console.log(`The sum of ${num1} and ${num2} is ${math.add(num1, num2)}`)

console.log(`${num1} minus ${num2} is ${math.subtract(num1, num2)}`)

console.log(`${num1} multiplied by ${num2} is ${math.multiply(num1, num2)}`)

console.log(`${num2} divided by ${num3} is ${math.divide(num2, num3)} or ${math.divide(num2, num3, false)}`)

console.log(`The square root of ${num1} is ${math.squareRoot(num1)}`)

console.log(`The area of a triangle with sides ${num3}, ${num4} and ${num5} is ${math.areaOfTriangle(num3, num4, num5)}`)
