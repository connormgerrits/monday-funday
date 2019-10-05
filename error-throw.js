
addOne = function (numberToAddTo) { // or 'function addOne (numberToAddTo) ....'
    if (numberToAddTo === undefined) {
        throw new Error('You must provide a number to add to');
    }
    return numberToAddTo + 1;
}

// practice ...

try {
    // failing to provide a number results in an error
    result = addOne();
    console.log(result);
} catch (err) {
    console.log(err.message); // .message is the new Error being thrown in the function above
}