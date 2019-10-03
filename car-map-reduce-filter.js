var cars = [
    {
        make: "dodge", 
        model: "charger", 
        year: 2019
    },
    {
        make: "toyota",
        model: "hylander",
        year: 2004
    },
    {
        make: "toyota",
        model: "camry",
        year: 2019
    }
]

var oldCars = cars.filter( (car) => {
    return car.year < 2019
})

// get an object for each car that includes the existing data as well
// as a single full string property named 'display'
// for example '2012 for fusion'
var displayData = cars.map( (car) => {
    car.display = car.year + ' ' + car.make + ' ' + car.model
    return car
})

// console.log(oldCars)
console.log(displayData)