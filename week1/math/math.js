module.exports.add = (a, b) => {
    return a + b
}

module.exports.subtract = (a, b) => {
    return a - b
}

module.exports.multiply = (a, b) => {
    return a * b
}

module.exports.divide = (a, b) => {
    return (a % b) === 0 
        ? a / b
        : `${Math.floor(a / b)} with a remainder of ${a % b}`
}
