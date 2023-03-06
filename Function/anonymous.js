//  A function wuthout a name
//  It can be declared dynamically at runtime
//  An anonymous function can be assigned within a variable


// var myFunction=function(){

//     return "Hello";

// }

// console.log(myFunction());



//  using parameter

var myFun=function(x){

    return x;

}

console.log(myFun(12));

//  using restparameter

var num=function(...y){

    return y;

}

console.log(num(12,23,43,5,3,4,45,65,76,34));


//  the advantagte of anonymous fuction: We can re assign the function


var myFunction=function(){

    return "Hello";

}

var myFunction=function(){

    return "Hello Again";

}

console.log(myFunction());

