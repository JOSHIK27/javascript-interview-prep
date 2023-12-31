// this refers to object for which function is property of 

function something() {
    console.log(this);
}
something()
const obj = {
    name : "Joshiik",
    x : function() {
        console.log(this.name)
    }
}