
/*
let city = "electric boogaloo";
console.log(city);

if (true) {
    city = "hooplah";
    console.log(city);
}

return console.log(city);
*/


function travelToLA (){
    let city = 'LOS ANGELES'
    let x = 10031
    if (x === 10031) {
        let city = 'NEW YORK CITY'
        console.log('We are in ' + city)
        let x = 91011
    }

    x = 91011;
    console.log('One 5 hour plane ride later...')

    if (x === 91011) {
        console.log('Now we are in ' + city + ' county.')
    } else {
        throw new Error ('OH NO WE DID NOT MAKE IT TO CALIFORNIA')
    }
}

try {
    travelToLA()
} catch (err) {
    console.log(err.message)
}
