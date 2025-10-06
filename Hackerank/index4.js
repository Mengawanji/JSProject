// Create Factorial function that takes one parameter and returns the factoria CSSMathValue

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1
    }
    if (!Number.isInteger(n)) {
    return "Error: n must be an integer";
  }

    return n * factorial(n-1)
 }



  // Task 
  // Declare a constant variable, PI, and assign it the value Math.PI.
  // You will not pass this challenge unless the variable is declared as a constant and 
  // named PI (uppercase). Read a number, r , denoting the radius of 
  // a circle from stdin. Use PI and r to calculate the area and perimeter of a 
  // circle having radius r. Print area as the first line of output 
  // and print perimeter as the second line of output.


 function main() {
    const PI = Math.PI;        
    let r = parseFloat(readLine()); 

    let area = PI * r * r;       
    let perimeter = 2 * PI * r;  

    console.log(area);           
    console.log(perimeter);
}