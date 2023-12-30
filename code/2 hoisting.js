str = "hiii"


var str;
console.log(str)


//variable declarations are hoisted not initialisation
// to avoid hoisitng use-strict


nothing()
function nothing() {
    console.log('does nothing')
}

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;