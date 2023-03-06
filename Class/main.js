// Overview
// ==============

//  The main base of OOP is Class
//  class is a reusable method/technology/system
//  Before ES6, it was hard to create a class in JavaScript.
//  But in ES6, we can create the class by using the class keyword




// create class and use
// =========================
// class and object
// first create class then create an object of this class
//  then call from class using object
// The properties of a class are highly reusable

// class myClass{
//     myFun1() {
        
//         console.log("Hello I am from function inside class");
        
//     }
//     myFun2() {
        
//         console.log("Hello I am from function inside class");
        
//     }
//     myFun3() {
        
//         console.log("Hello I am from function inside class");
        
//     }
//     myFun4() {
        
//         console.log("Hello I am from function inside class");
        
//     }
// }


// var obj= new myClass;

// obj.myFun1();
// obj.myFun2();
// obj.myFun3();
// obj.myFun4();


//  using parameter

class myClass{
    myFun1(x) {
        
        console.log(x);
        
    }
    myFun2(y) {
        
        console.log(y);
        
    }
 
}

var obj= new myClass;

obj.myFun1("Hello");
obj.myFun2("Yes");