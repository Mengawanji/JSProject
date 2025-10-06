// A Promise in JavaScript is like a receipt for a task that takes time. 
// It promises to get you a result in the future. 
// You use .then() to decide what to do if it's successful, 
// and .catch() to decide what to do if it fails.

// The Three States of the Promise:
// - Pending 
// - Fulfilled
// - Rejected

// .then() is used to run code when a Promise is successfully fulfilled
// .catch() is used to handle errors. Is is executed if the promise is Rejected

// await pauses the execution of the async function until the Promise on its right side resolves or rejects.



// Task

// Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.


function reverseString(s) {
    try {
        let ans = s.split("").reverse().join(""); 
        console.log(ans);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    } 
}
