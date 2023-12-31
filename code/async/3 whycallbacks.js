// why do we need callbacks ?

// as per prev code, if we need the result of async operation to continue further we use callbacks


let information = "empty"

setTimeout(() => {
    information = "This is info from server which is assigned after 2000 seconds"
}, 3000);

function print() {
    console.log(information)
}

print() // this prints empty as the data is not yet retrieved from the server. In thesr type of cases we pass this as callback and use later

function solve(print2) {
    setTimeout(() => {
        information = "This is info from server which is assigned after 3000 seconds"
        print2()
    }, 3000);
}

function print2() {
    console.log(information)
}
solve(print2)