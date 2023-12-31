// java-script is single threaded and synchrnous language

// single thread -> one stack/ one operation at a moment
// synchrnous -> sequential (top to bottom of execution of tasks)

console.log("first this is printed")

console.log("then this")


// now the let us understand what happens with long running tasks

for(let i = 0; i < 1000000; i++) {
    console.log("i")
}
console.log("waiting here for a while")

// so the above for loop is blocking the below code . Here js is being synchronous and tasks are running sequentially

