// ARROW FUNCTIONS

// Task

// Complete the function in the editor. It has one parameter: an array,nums . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Input Format

// The first line contains an integer, n, denoting the size of numsa .
// The second line contains n space-separated integers describing the respective elements of nums.


function modifyArray(nums) {
        for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            nums[i] = nums[i] * 2;
        } else {
            nums[i] = nums[i] * 3;
        }
    }
    return nums;
}


// Alternative approach using map() 

// How it works:

// We iterate through each element in the nums array

// For each element, we check if it's even using the modulo operator %

// If num % 2 === 0, the number is even, so we multiply by 2

// If num % 2 !== 0, the number is odd, so we multiply by 3

// Return the modified array


function modifyArray(nums) {
    return nums.map(num => num % 2 === 0 ? num * 2 : num * 3);
}



// fibonacci

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Example usage
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55