// Promise:
// "Producing code" is code that can take some time.
// "Consuming code" is code that must wait for the result.
// A Promise is an Object that links Producing code and Consuming code.

// Example 1:
// Create a promise
function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data === "success"){
            return resolve("Successfully executed...")
        }
        else{
            return reject("Rejected...")
        }
    })
}

// Use the promise
checkIsSuccess('success')
    .then(function(resolve){
        console.log(resolve)
    })
    .catch(function(reject){
        console.log(reject)
    })

// O/P: Successfully executed...

// Example 2:
// Create a promise
function checkAge(ageOfPerson){
    return new Promise(function(resolve, reject){
        if(ageOfPerson == 26){
            return resolve("Age is 26...")
        }
        else{
            return reject("Age is not 26...")
        }
    })
}

// Use the promise
checkAge(28)
.then(function(resolve){
    console.log(resolve)
})
.catch(function(reject){
    console.log(reject)
})

// O/P: Age is not 26...

// Example 3:
// a promise in JavaScript like a promise in real life. When someone makes a promise, they 
// either keep it or break it. Similarly, in JavaScript, a promise represents an operation 
// that hasn't completed yet but will in the future.

// Here's a simple breakdown:

// Creating a Promise: You create a promise to do something that might take some time, like 
// fetching data from a server.
// Pending: Initially, the promise is in a "pending" state, meaning it hasn't finished yet.
// Resolved: If the operation is successful, the promise is "resolved" and gives you a result.
// Rejected: If the operation fails, the promise is "rejected" and gives you an error.
// Example
// Imagine you order a pizza:

// Pending: The pizza is being made.
// Resolved: The pizza arrives, and you enjoy it.
// Rejected: The pizza shop calls to say they can't deliver.
// In code, it looks like this:

function ispizzaready(pizzaReady){
    return new Promise(function(resolve, reject){
    if (pizzaReady = true) {
        resolve("Pizza is here!");
    } else {
        reject("Sorry, no pizza today.");
    }
    })
}

ispizzaready(true)
  .then(function(resolve){
    console.log(resolve); // "Pizza is here!"
  })
  .catch(function(reject){
    console.error(reject); // "Sorry, no pizza today."
  });

// O/P: Pizza is here!