// ususually these long running tasks are web api's like fetching data from a server 

// few are : fetchapi, setTimeOut, setInterval etc

// these are long running and these provided by browser. Naturally blocking is expected when we use these but browser runs these on seperate thread without blocking main thread


setTimeout(() => {
    console.log("This runs after 2 seconds")
}, 2000)

console.log("This printed first")

