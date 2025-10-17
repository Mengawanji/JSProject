// Task

// Complete the getGrade(score) function in the editor. It has one parameter: 
// an integer,score, denoting the number of points Julia earned on an exam. It must 
// return the letter corresponding to her grade according to the  rules:


function getGrade(score) {
    let grade;
    // Write your code here
    
    if (0<= score  && score <= 5 ) {
        grade = 'F';
    }else if (5< score  && score <= 10 ) {
        grade = 'E';
    }   else if (10< score && score <= 15 ) {
        grade = 'D';
    } else if (15< score && score <= 20 ) {
        grade = 'C';
    }else if (20< score && score <= 25 ) {
        grade = 'B';
    }else if (25< score && score <= 30 ) {
        grade = 'A';
    }
    
    
    return grade;
}



//===========================

function getCount(objects) {
        let count = 0;
    for (let obj of objects) {
        if (obj.x === obj.y) {
            count++;
        }
    }
    return count;
}


//Find the second largest number in an arrey


function getSecondLargest(nums) {
    
    const largest = Math.max(...nums);
    
    const withoutLargest = nums.filter(num => num < largest); 
    
    if(withoutLargest === 0){
        return largest
    }  

    return Math.max(...withoutLargest)
}




// Switch Cases :

// Complete the getLetter(s) function in the editor. 
// It has one parameter: a string, , consisting of lowercase English 
// alphabetic letters (i.e., a through z). 
// It must return A, B, C, or D depending on the following criteria:

// {a, e, i, o, u} → 'A'
// {b, c, d, f, g} → 'B'
// {h, j, k, l, m} → 'C'
// {n, p, q, r, s, t, v, w, x, y, z} → 'D'


function getLetter(s) {
    let letter;
    switch(true){
        case "a e i o u".includes(s[0]):
        letter = 'A';
        break
        
        case "b c d f g".includes(s[0]):
        letter = 'B';
        break;
        
        case "h j k l m".includes(s[0]):
        letter = 'C';
        break;
        
        case "n p q r s t v w x y z".includes(s[0]):
        letter = 'D';
        break;
    }

    return letter;
}

// Task

// Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.
// Locked code in the editor tests the Polygon constructor and the perimeter method.

// Note: The perimeter method must be lowercase and spelled correctly.

// Input Format


// Define the Polygon class
class Polygon {
  constructor(sides) {
    this.sides = sides; // store array of side lengths
  }

  // method to return the perimeter
  perimeter() {
    return this.sides.reduce((a, b) => a + b, 0);
  }
}

// Example:
let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter()); // Output: 12

