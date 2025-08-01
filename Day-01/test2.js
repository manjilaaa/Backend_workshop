//synchronous programming blocks the thread
setTimeout( () => {
    console.log("I am timeout")
},5000)
console.log("I am out")   
