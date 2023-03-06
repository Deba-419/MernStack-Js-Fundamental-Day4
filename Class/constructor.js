//  Constructor is own method/function of a class
//  When class object is created, constructor called autometically
//  Constructor works as like as function (like operation, logic, parameter) 
// but the main defference between class and constractor is that funtions can return but constractor can't return 
//  one class can create only one constructor


//  example=========>

// class myClass{
//     constructor(){
//         console.log("Hello I am constractor");
//     }
// }

// new myClass();


//  parameter

// class myClass{
//     constructor(...A){
//         console.log(A);
//     }
// }

// new myClass(19,24,35,45,65,45);


// class myClass{
//     constructor(A,B){
//         console.log(A+B);
//     }
// }

// new myClass(19,24);

// =========================


//  parameterize constructor

class myClass{
    constructor(A,B){
       this.firstNum=A;    //class variable
       this.secondNum=B;   //class variable
    }

    add() {
       let result=this.firstNum+this.secondNum;
       console.log(result);
    }

}

var obj=new myClass(18,24);

obj.add();