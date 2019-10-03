let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// provide the ages as objects and include the message such as
// '18 is old enough to buy lottery tickets'

// filter
let oldEnough = ages.filter( (age) => {
    return age >= 18
})

// map
let oldEnoughButString = oldEnough.map( (age) => {
    age = {
        age: age,
        worded: age + ' is old enough to buy lottery tickets'
    }
    return age
})

// console.log the array of objects
console.log(oldEnoughButString)