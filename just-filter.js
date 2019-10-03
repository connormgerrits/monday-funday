var ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

var ableToBuyLotto = ages.filter( (age) => {
    return age >= 18
})

console.log(ableToBuyLotto)