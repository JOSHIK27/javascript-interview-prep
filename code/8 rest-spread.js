// rest and spread 2 most commonly used ones

// rest is used to convert any number of paramters to an array (...args)
// most importantly rest parameter should be at the last of paramters list in the function

function solve(...args) {
    console.log(args[0], args[1], args[2])
}

solve(1, "2", null)


// spread operator is used to spread elements of an array and object literals