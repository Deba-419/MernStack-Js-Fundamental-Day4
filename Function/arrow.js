//  To write smaller function syntex
//  Arrow functions make your code more readable and structured
//  Arrow functions are anonymous functions
//  Can declare without the function keyword

// -----------------------------------------------
// Arrow functions cannot be used as the constractor

var myArrow = ()=>{

    console.log("My first arrow function");

}

myArrow();

// Using parameter
var myArrow = (x)=>{

    console.log(x);

}

myArrow("Hello");


// Using rest parameter

var myArrow = (...x)=>{

    console.log(x);

}

myArrow(1,2,3,4,5,5,6,6);


//  Return
//  Note: return is not arrow function's features.... arrow function returns as a anonymous function
var myArrow = (...x)=>{

 return 'Hello World';
    
}


console.log(myArrow());

