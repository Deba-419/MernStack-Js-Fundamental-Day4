// ES6 Set
// ========
//  Set is a collection of data
//  Set is almost like array
//  But it does not contain any duplicates  : it is as like as Map but Map contain duplicates
// ======================================


// Using add method : best use always

var mySet= new Set();

mySet.add('Bangladesh');
mySet.add('India');
mySet.add('Nepal');
mySet.add('Bhutan');
mySet.add('Maldip');
mySet.add('china');
mySet.add('US');
mySet.add('UK');
mySet.add('Brazil');
mySet.add('Argentina');
mySet.add('India');   //it does not contain any duplicates

// console.log(mySet);

// // ============================================
// //  Using array method   : much basic
// var mySet= new Set([1,2,3,4,2,34,4]);  //it does not contain any duplicates

// console.log(mySet);



// ==========================================
//  .clear()
//  .delete(value)
//  .has(value)
//  .values()
//  set.size

// =============================

// // .clear()

// mySet.clear();
// console.log(mySet);

//  ====================

// //  .delete(value)
// mySet.delete('Nepal');
// console.log(mySet);

//  ====================

// //  set.size

// console.log(mySet.size);

//  ====================

// //  .values()
// //  set.values()

// console.log(mySet.values());

// =============================

// .has(value)

if(mySet.has('Maldip')){

    console.log("YES");
}
else{

    console.log("NO");

}






