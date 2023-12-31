// hositing : it is behaviour of javascript to bring the js variables/ functions to move to the top of their scope 
// var are initialised with undefined after moving to the top
// let and const are hoisted but not initialised

something()

function something() {
    console.log("calling the hosited function")
}

console.log(a) // prints undefined . Variable a is hoisted by moving to the top of its scope and inialised with undeifned value

var a = 10


console.log(b) //2 hoisting.js:9 Uncaught ReferenceError: Cannot access 'b' before initialization
// this says that, b is hoisted i.e moved top of its scope but not initialised same with const

let b = 20


