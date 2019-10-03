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



console.log(oldCars)