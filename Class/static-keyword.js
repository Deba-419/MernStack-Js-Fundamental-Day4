// without static keyword properties are connected with class Object
// with static keyword properties are directly connected with class



// // without static
// class myClass{

//     hello(){
//         console.log("Hello World");
//     }
// }

// var obj= new myClass();
// obj.hello();                   //from object

// ==============================

// with static 


class myClass{

   static hello(){
        console.log("Hello World");
    }
}
myClass.hello();     //direct class

// in static if we call froom object it gives error
// var obj= new myClass();
// obj.hello();