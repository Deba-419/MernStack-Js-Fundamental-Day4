// Class Inheritance
// ================================
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:


// class parent{


//     Hello1(params) {
//         console.log("Hello 1 Function");
//     }

//     Hello2(params) {
//         console.log("Hello 2 Function");
//     }

// }



// class child extends parent{



// }


// // from child
// var obj=new child();

// obj.Hello1();
// obj.Hello2();

// // from parent
// var obj=new parent();

// obj.Hello1();
// obj.Hello2();


//  Method overriding / function overriding only can child class
//  child class only can modify parent class 

class parent{


    Hello1(params) {
        console.log("Hello 1 Function");
    }

    Hello2(params) {
        console.log("Hello 2 Function");
    }

}

class child extends parent{
    
    Hello1(params) {
        console.log("Hello 1 Function. What's app?");  //modify parent class function
    }


}

var obj=new child();

obj.Hello1();
obj.Hello2();