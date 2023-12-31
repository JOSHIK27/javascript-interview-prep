// promises are js objects which resolves asycnhronous operations

// what promises solve ?

// In previous exmaple we passed callback once async operation is done its execution which might lead to callback hell
// promises provided better way to handle async functions
// they resolve async function output for us and chain the callback by passing the output of async function, we can then call our func or code


const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value that promsie resolved");
    }, 2000)
})
// prom is promise which will be resolve after 2 seconds
// think it of as some async func taking 2 seconds to execute

prom.then((prom_value) => {
    console.log(prom_value)
})


// let us solve how promise provides better way to solve previous prob
let information = "empty"

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Info from server")
        }, 3000)
    })
}

asyncTask().then((prom_value) => {
    information = prom_value
    console.log(information)
})
