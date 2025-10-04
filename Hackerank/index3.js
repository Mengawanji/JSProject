A Promise in JavaScript is like a receipt for a task that takes time. 
It promises to get you a result in the future. 
You use .then() to decide what to do if it's successful, 
and .catch() to decide what to do if it fails.

The Three States of the Promise:
- Pending 
- Fulfilled
- Rejected

.then() is used to run code when a Promise is successfully fulfilled
.catch() is used to handle errors. Is is executed if the promise is Rejected

await pauses the execution of the async function until the Promise on its right side resolves or rejects.