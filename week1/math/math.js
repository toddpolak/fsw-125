add = (a, b) => {
    return a + b
}

subtract = (a, b) => {
    return a - b
}

multiply = (a, b) => {
    return a * b
}

divide = (a, b, remainder = true) => {

    if (remainder) {
        return (a % b) === 0 
        ? a / b
        : `${Math.floor(a / b)} with a remainder of ${a % b}`
    } else {
        return a / b
    }
}

squareRoot = (a) => {
    return Math.sqrt(a)
}

areaOfTriangle = (a, b, c) => {
    let sides, area, perimeter, x, y, z

    sides = add(a, b)
    sides = add(sides, c)

    perimeter = divide(sides, 2, false)

    x = subtract(perimeter, a)
    y = subtract(perimeter, b)
    z = subtract(perimeter, c)

    area = multiply(x, y)
    area = multiply(area, z)
    area = multiply(perimeter, area)

    return squareRoot(area)
}

module.exports = { 
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    areaOfTriangle
}