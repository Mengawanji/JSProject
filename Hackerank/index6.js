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
