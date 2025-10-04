class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

        greet (){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.}`);
    }
}


class Meal {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }

    eat(){
        console.log(`I eat ${this.food} and drink ${this.drink} when I'm happy`);
    }
}

// To create and Instance of the meal class

const myMeal = new Meal('Guava', 'Cocktail');

myMeal.eat();


// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.


class Rectangle {
    constructor (w , h) {
        this.w = w;
        this.h = h;
    } 
}

Rectangle.prototype.area = function () {
    return this.w * this.h;
}

class Square {
    constructor (side) {
        super(side,side)
    }
}



// class Square extends Rectangle

// This means Square is a subclass of Rectangle.

// In other words, Square inherits everything from Rectangle (its properties and its prototype methods, like area).

// super calls the parent class’s constructor (Rectangle’s constructor).


// 👉 A good way to think about it:

// extends = “Square is a type of Rectangle.”

// super() = “Run Rectangle’s setup code, but with square-specific values.